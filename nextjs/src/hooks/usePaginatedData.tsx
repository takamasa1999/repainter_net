import { useState } from 'react';

interface DefaultFetchDataParams {
    skip: number;
    take: number;
}

// Allow users to extend the default parameters with their own custom parameters

type FetchDataFunction<DataFunctionType, Params> = (params: Params) => Promise<DataFunctionType[]>;

export function usePaginatedData<DataFunctionType, Params extends DefaultFetchDataParams>(
    fetchData: FetchDataFunction<DataFunctionType, Params>,
    initialParams: Params
) {
    const [params, setParams] = useState<Params>(initialParams);
    const [data, setData] = useState<DataFunctionType[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    function updateSkip() {
        if (params.skip !== undefined && params.take !== undefined) {
            setParams({
                ...params,
                skip: params.skip + params.take
            })
        }
    }

    async function loadMore() {
        setLoading(true);
        const newData = await fetchData(params);
        if (newData.length == 0) {
            setHasMore(false);
            setLoading(false);
            return;
        }
        setData([...data, ...newData]);
        updateSkip();
        setLoading(false);
    }

    return { data, loadMore, loading, hasMore };
}
