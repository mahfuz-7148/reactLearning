import React from 'react'
import './Blogs.css'

const Blogs = () => {

  const clicked = () => {
    const clickk = document.getElementById('clk')
    clickk.textContent = `Welcome my blogs`
  }

  return (
    <div className='container'><h1 id='clk' className='blogs'> My Blogssss</h1>
    <button onClick={clicked}>Click me</button>
    </div>
  )
}

export default Blogs