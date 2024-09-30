"use server"
import prisma from "@/lib/db"

export default async function getSapceId(space_name: string) {
    const response = await prisma.voice_space.findUnique(
        {
            where: {
                space_name: space_name
            }
        }
    )
    console.log(response)
    return response?.id
}