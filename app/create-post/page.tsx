import CreatePostForm from "@/components/CreatePostForm";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function CreatePost() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/sign-in");
    }

    return <CreatePostForm />;
}