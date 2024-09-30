import { useEffect } from "react"
import SpaceTable from "./components/SpaceTable"
import { usePaginatedData } from "@/hooks/usePaginatedData"
import getAvailableSpaces from "./functions/getAvailableSpaces"
// import { usePaginatedData } from "./usePaginatedData"

export default function AvailableSpaces({ shouldLoadMore }: {
    shouldLoadMore: boolean
}) {
    const { data, hasMore, loadMore } = usePaginatedData(getAvailableSpaces, { skip: 0, take: 2 })

    useEffect(() => {
        if (shouldLoadMore && hasMore) {
            loadMore()
        }
    }, [shouldLoadMore, loadMore, hasMore])


    return (
        <>
            <SpaceTable spaces={data} />
        </>

    )
}