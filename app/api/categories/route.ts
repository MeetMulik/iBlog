import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const categories = await prisma.category.findMany();
        return NextResponse.json(categories, { status: 201 });

    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })

    }
}