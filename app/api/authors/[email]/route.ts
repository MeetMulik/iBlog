import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { email: string } }) {
    const email = params.email;
    try {
        const post = await prisma.user.findUnique({
            where: {
                email
            },
            include: {
                posts: {
                    orderBy: {
                        createdAt: 'desc'
                    }
                }
            }
        })
        return NextResponse.json(post, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
    return NextResponse.json({ message: "Hello from posts/[id]/route.ts" });
}