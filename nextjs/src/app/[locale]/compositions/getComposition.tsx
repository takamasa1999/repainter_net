"use server"

import { PrismaClient } from "@prisma/client";

export async function getComposition() {
    const prisma = new PrismaClient();
    const composition = await prisma.composition.findMany();
    return composition
}