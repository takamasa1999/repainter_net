import { useState } from 'react';

interface FetchDataParams {
    locale?: string;
    skip?: number;
    take?: number;
}

type FetchDataFunction<DataFunctionType> = (params: FetchDataParams) => Promise<DataFunctionType[]>;

export function usePaginatedData<DataFunctionType>(
    fetchData: FetchDataFunction<DataFunctionType>, locale: string = "en", take: number = 2
) {
    const [skip, setSkip] = useState(0);
    const [data, setData] = useState<DataFunctionType[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    function updateSkip() {
        setSkip(skip + take);
    }

    async function loadMore() {
        setLoading(true);
        const newData = await fetchData({ locale, skip, take });
        if (newData.length === 0) {
            setHasMore(false);
            setLoading(false)
            return
        }
        setData([...data, ...newData]);
        updateSkip();
        setLoading(false);
    }

    return { data, loadMore, loading, hasMore };
}