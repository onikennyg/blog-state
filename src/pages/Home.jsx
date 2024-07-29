import React from 'react'
import Blog from '../components/Blog'
import { useEffect } from 'react'
import { useState } from 'react'

const Home = () => {

  const [blogs, setBlogs] = useState([]);
  const endPoint = "http://localhost:3000/blogs"
  const fetchBlog = async () => {

    try {
      const fetchResponse = await fetch(endPoint)
      const convertedResponse = await fetchResponse.json()
      setBlogs(convertedResponse)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchBlog()
  }, [])

  const deleteBlog = async (id) => {

    try {
      const response = await fetch(`http://localhost:3000/blogs/${id}`, {
        method: "DELETE"
      })

      if(!response.ok){
        throw new Error ('Failed to delete blog');
      }

      setBlogs((previousBlogs) => previousBlogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
    <div className='flex justify-center flex-col items-center'>
      {
        blogs && blogs.map((blog) => (
          <Blog key={blog.id} id={blog.id} titleProp={blog.title} bodyProp={blog.body} authorProp={blog.author} deleteProp={ () => deleteBlog(blog.id)} />
        ))
      }
    </div>
    </>
  );
}

export default Home