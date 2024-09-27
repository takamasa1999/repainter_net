"use server";
import prisma from "@/lib/db";

interface type {
    skip: number;
    take: number;
    space_name: string;
}
export default async function getVoices({ skip = 0, take = 2, space_name }: type) {
    const response = await prisma.voice.findMany({
        where: {
            voice_space: {
                space_name: space_name
            }
        },
        select: {
            id: true,
            registered_at: true,
            dictated_text: true
        },
        orderBy: {
            registered_at: "desc"
        },
        skip: skip,
        take: take
    });

    return response
}