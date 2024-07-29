import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blogpage = () => {

  const [blog, setBlog] = useState(null);
  const {id} = useParams();

  const fetchBlog = async () => {

    try {
      const response = await fetch(`http://localhost:3000/blogs/${id}`)
      const data = await response.json()
      setBlog(data)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchBlog()
  }, [id])

  if(!blog){
    return <div>loading....</div>
  }
  return (
    <main className="px-[100px]">
      <div className="py-12">
        <div className="mt-12 border p-20 bg-slate-100">
          <h1 className="text-3xl font-bold text-slate-600">
            {blog.title}
          </h1>
          <p className="mt-4 text-gray-500">
            {blog.body}
          </p>
          <p className="mt-4">author: {blog.author}</p>
        </div>
      </div>
    </main>
  );
};

export default Blogpage;
