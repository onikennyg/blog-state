import React from "react";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { Link } from "react-router-dom";

const Blog = ({ deleteProp, id, titleProp, bodyProp, authorProp }) => {
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if(words.lenght <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}

  return (
    <>
      <Link to={`/blogpage/${id}`}>
      
      <div className="container border rounded bg-slate-100 m-6 p-5 h-[180px] w-[70vw] shadow-lg">
        <h2 className="text-red-500 mb-3">{titleProp}</h2>
        <p> {truncateText(bodyProp, 50)}</p>
          <div className="flex justify-between">
          <h4 className="text-gray-500 mt-6">{authorProp}</h4>
        <div className="icons-container flex gap-2">
          <div className="w-10 h-10 hover:bg-gray-200 rounded-full flex items-center justify-center hover:text-blue-600 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover-scale-110 duration-300">
              <Link to={`/update/${id}`}>
              <CiEdit />
              </Link>
          </div>
          <div className="w-10 h-10 hover:bg-gray-200 rounded-full flex items-center justify-center hover:text-red-600 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover-scale-110 duration-300">
            <CiTrash onClick={deleteProp}/>
          </div>
        </div>
          </div>
      </div>
      </Link>
    </>
  );
};

export default Blog;