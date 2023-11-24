import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
    <div className='px-4 pt-6 h-screen'>
    <div className="w-full mb-1">
     <Outlet/>
    </div>
   

    </div>
    
    </>
  )
}

export default Main


