import Post from '@/components/Post';
import { postsData } from '@/data';
import Link from 'next/link';
import React from 'react'

const Dashboard = () => {
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