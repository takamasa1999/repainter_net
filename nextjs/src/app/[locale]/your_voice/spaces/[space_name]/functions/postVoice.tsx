"use server";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";

interface type {
    dictated_text: string;
    voice_spaceId: number;
}
export default async function postVoice({ dictated_text, voice_spaceId }: type) {
    const currentTime = new Date();
    try {
        const response = await prisma.voice.create({
            data: {
                id: undefined,
                registered_at: currentTime,
                dictated_text: dictated_text,
                voice_spaceId: voice_spaceId,
            }
        })
        return response
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            // The .code property can be accessed in a type-safe manner
            if (e.code === 'P2002') {
                throw new Error('There is a unique constraint violation, a new space cannot be created with this name');
            }
        }
        throw new Error('An unexpected error occurred');
    }
}