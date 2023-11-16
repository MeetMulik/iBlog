import CategoriesList from '@/components/CategoriesList'
import Post from '@/components/Post'
import { postsData } from '@/data'
import React from 'react'


const Home = () => {
  return (

    <div>
      <CategoriesList />
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
        <div className="py-6">No posts to display</div>
      )}
    </div>
  )
}

export default Home