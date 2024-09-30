import { useState } from 'react';
import getCompositions, { CompositionsType } from '../app/[locale]/compositions/getCompositions';


export function useCompositions(locale: string, take: number) {
  const [skip, setSkip] = useState(0);
  const [compositions, setCompositions] = useState<CompositionsType>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true)

  function updateSkip() {
    setSkip(skip + take);
  }

  async function loadMore() {
    setLoading(true);
    const newData = await getCompositions({ locale, skip, take })
    if (newData.length == 0) {
      setHasMore(false)
      setLoading(false);
      return
    }
    setCompositions([...compositions, ...newData]);
    updateSkip()
    setLoading(false);
  }

  return { compositions, loadMore, loading, hasMore };
}
