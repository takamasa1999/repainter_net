"use server";
import prisma from "@/lib/db";

type getAvailableSpacesType = {
    skip: number;
    take: number;
}
export default async function getAvailableSpaces({skip=0, take=2 }: getAvailableSpacesType) {

    const response = await prisma.voice_space.findMany({
        select: {
            id: true,
            registered_at: true,
            last_update_at: true,
            space_name: true
        },
        orderBy: {
            last_update_at: "desc"
        },
        skip: skip,
        take: take
    });

    return response
}

export type AvailableSpacesResponseReturnType = Awaited<ReturnType<typeof getAvailableSpaces>>;
