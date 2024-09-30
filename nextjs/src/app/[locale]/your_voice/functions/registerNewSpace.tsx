"use server";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";

export default async function registerNewSpace(spaceName: string) {
    const currentTime = new Date();
    try {
        const newVoiceSpace = await prisma.voice_space.create({
            data: {
                registered_at: currentTime,
                last_update_at: currentTime,
                space_name: spaceName
            }
        });
        return newVoiceSpace;
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
