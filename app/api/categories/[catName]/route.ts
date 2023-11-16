import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { catName: string } }) {
    const catName = params.catName;
    try {
        const post = await prisma.category.findUnique({
            where: {
                catName
            },
            include: {
                posts: {
                    include: {
                        author: true
                    },
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