import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="pt-24 flex flex-col relative pb-16 mb-36 ">
      <h1 className="md:text-5xl sm:text-3xl mt-12  text-[#06632e] text-2xl font-bold py-2">Sorry</h1>
     <p className="md:text-4xl sm:text-3xl mt-12 text-2xl font-bold py-2">Page Not Found</p>
     <Link  className="text-xl mt-12  font-bold underline" to='/'>Back to homepage...</Link>
    </div>
  )
}

export default NotFound