import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { title, content, links, selectedCategory, imageUrl, publicId } =
        await req.json();

    const authorEmail = 'meetmulik125@gmail.com'

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