import { useState } from 'react';
import getAvailableSpaces,{AvailableSpacesResponseReturnType} from './functions/getAvailableSpaces';


export function useSpaces(take: number) {
    const [skip, setSkip] = useState(0);
    const [spaces, setSpaces] = useState<AvailableSpacesResponseReturnType>([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true)

    function updateSkip() {
        setSkip(skip + take);
    }

    async function loadMore() {
        setLoading(true);
        const newData = await getAvailableSpaces({ skip, take })
        if (newData.length == 0) {
            setHasMore(false)
            setLoading(false);
            return
        }
        setSpaces([...spaces, ...newData]);
        updateSkip()
        setLoading(false);
    }

    return { spaces, loadMore, loading, hasMore };
}
