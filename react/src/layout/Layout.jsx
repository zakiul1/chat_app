import React from 'react'


import Main from './Main'
import NavBar from './Navbar'
import SideBar from './Sidebar'


const Layout = () => {
  return (
    <>
   <NavBar/>
   <div className="flex pt-16 overflow-hidden bg-sky-50 dark:bg-gray-900">
   <SideBar/>
    <div  className="relative w-full h-full overflow-y-auto bg-sky-50 lg:ml-64 dark:bg-gray-900">
        <main>
            {/* Main Cntent */}
            <Main/>
        </main>
        </div>
   </div>
  
    </>
  )
}

export default Layout