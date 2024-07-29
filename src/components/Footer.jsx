import React from 'react'

const Footer = () => {
  return (
  
    <div className='foott bg-gray-500 flex justify-between w-full text-white'>
      <div className=''>
        <div className='name'>
            <img src="" alt="" />
            <h2 className='tex'>Oni's Consolidated</h2>
        </div>
        <p className='p1'>Copyright &copy; 2024 Oni's Consolidated</p>
        <p className='p2'>All right reserved</p>
      </div>

      <div className='sec1'>
        <h1 className='m-1'>Company</h1>
        <h4>About Us</h4>
        <h4>Blog</h4>
        <h4>Contact Us</h4>
        <h4>Pricing</h4>
        <h4>Testimonials</h4>
      </div>

      <div className='sec2'>
        <h1 className='m-1'>Support</h1>
        <h4>Help Center</h4>
        <h4>Terms of Service</h4>
        <h4>Legal</h4>
        <h4>Privacy Policy</h4>
        <h4>Status</h4>
      </div>

      <div>
        <h3 className='sec3'>Stay up to date</h3>
        <input type="text" placeholder='Your email address' />
      </div>
    </div>
  
  )
}


export default Footer