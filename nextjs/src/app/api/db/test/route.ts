import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

export async function POST(
    request: NextRequest
    // Response: NextResponse
) {

    const prisma = new PrismaClient();
    const newUserWithPost = await prisma.profile.create({
        data: {
            userId: 1,
            bio: "test",
        },
        // include: {
        //     posts: true, // 関連付けられたポストもレスポンスに含めます
        // }
    })
    return new Response(JSON.stringify(newUserWithPost), {
        status: 200,
    });
}