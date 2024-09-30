"use client"
import { useEffect } from "react"
import getVoices from "../functions/getVoices"
import { usePaginatedData } from "@/hooks/usePaginatedData"
import { Typography } from '@mui/material';

interface type {
    space_name: string
}
export default function Voices({ space_name }: type) {
    const { data, loadMore, hasMore } = usePaginatedData(getVoices, { space_name: space_name, skip: 0, take: 2 })

    useEffect(() => {
        if (hasMore === true) {
            loadMore()
        }
    }, [loadMore, hasMore])

    return (
        <>
            {
                data.map((data, i) => (
                    <div key={i}>
                        <Typography component={"p"}>
                            {data.dictated_text}
                        </Typography>
                        <Typography  component={"i"}>
                            {data.registered_at.toTimeString()}
                        </Typography>
                    </div>
                ))
            }
        </>
    )
}