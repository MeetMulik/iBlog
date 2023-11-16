import Post from '@/components/Post';
import Link from 'next/link';
import React from 'react'

import { postsData } from '@/data';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/sign-in");
    }

    return (
        <div>
            <h1>My Posts</h1>
            {postsData && postsData.length > 0 ? (
                postsData.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        author={post.author}
                        authorEmail={post.authorEmail}
                        date={post.createdAt}
                        thumbnail={post.thumbnail}
                        category={post.category}
                        title={post.title}
                        content={post.content}
                        links={post.links || []}
                    />
                ))
            ) : (
                <div className="py-6">No posts created yet
                    <Link className='underline' href={`/create-post`}>Create New</Link>
                </div>
            )}
        </div>
    )
}

export default Dashboard;