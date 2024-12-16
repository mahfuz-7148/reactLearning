import React from 'react'
import InsideNav from './InsideNav'

const ContextNav = () => {
  return (
    <div>

        <InsideNav />

        <div className="flex justify-center m-5 p-5">
        <button className="p-5 bg-green-600 text-yellow-200 rounded-3xl">Count 2</button>
        </div>
    </div>
  )
}

export default ContextNav