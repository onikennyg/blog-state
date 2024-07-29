import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className='w-full h-[70px] bg-gray-500 flex items-center text-white justify-around'>
        <a href="">Kenny</a>
        <div>
            <Link className='mr-3' to="/">Home</Link>
            <Link className='mr-3' to="/create">Create</Link>
            <Link className='mr-3' to="/update/:id">Update</Link>
            <Link className='mr-3' to="/blogpage/:id">Blogpage</Link>
        </div>

        <div>
        <Link className= "ring text-white px-4 py-1 mr-2 rounded" to="/login"><button>Log in</button></Link> 
        <Link className= "ring text-white px-4 py-1 mr-2 rounded" to="/register"><button>Register</button></Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar
