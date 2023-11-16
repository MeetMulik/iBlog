import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';


export async function POST(req: Request) {

    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { title, content, links, selectedCategory, imageUrl, publicId } =
        await req.json();

    const authorEmail = session?.user?.email as string;

    if (!title || !content) {
        return NextResponse.json({ message: "Title and content are required" }, { status: 500 })
    }

    try {
        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                links,
                imageUrl,
                publicId,
                catName: selectedCategory,
                authorEmail,
            }
        })
        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })

    }
}


export async function GET(req: Request) {
    try {
        const posts = await prisma.post.findMany({
            include: {
                author: {
                    select: {
                        name: true,
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return NextResponse.json(posts, { status: 201 });

    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}