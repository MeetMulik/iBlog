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


export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const { title, content, links, selectedCategory, imageUrl, publicId } = await req.json();
    const id = params.id;
    try {
        const updatedPost = await prisma.post.update({
            where: {
                id
            },
            data: {
                title,
                content,
                links,
                imageUrl,
                publicId,
                catName: selectedCategory,
            }
        });
        return NextResponse.json(updatedPost, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    try {
        const deletedPost = await prisma.post.delete({
            where: {
                id
            }
        });
        return NextResponse.json(deletedPost, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}