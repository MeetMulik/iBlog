import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    try {
        const post = await prisma.post.findUnique({
            where: {
                id
            }
        })
        return NextResponse.json(post, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
    return NextResponse.json({ message: "Hello from posts/[id]/route.ts" });
}