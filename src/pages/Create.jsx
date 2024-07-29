import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const endPoint = "http://localhost:3000/blogs"

  const navigate = useNavigate()

  const addBlog = async (e) => {
    e.preventDefault();

    if(!title || !body || !author){
      alert("Fill in all fields");
      return 
    }

    try {
      const newBlog = {title,body,author}
      const blogResponse = await fetch(endPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newBlog)
      })

      if(!blogResponse.ok){
        alert("Failed to add blog")
      }

      alert("Blog added sucessfully")
      
      navigate("/")

    } catch (error) {
      console.error(error)
    }

  };

  return (
    <>
      <div className="mt-5">
        <h1 className="text-2xl text-center font-bold mb-5">Add New Blog</h1>
        <div className="max-w-xl mx-auto my-10 p-5 shadow-md rounded bg-slate-100">
          <form
            action="/submit_blog"
            className="space-y-4"
            onSubmit={addBlog}
          >
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Blog Title:
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                id="title"
                name="title"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="body"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Blog Body:
              </label>
              <textarea
                onChange={(e) => setBody(e.target.value)}
                value={body}
                id="body"
                name="body"
                rows="10"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="author"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Blog Author:
              </label>
              <input
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                type="text"
                id="author"
                name="author"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Add Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
