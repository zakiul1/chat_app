import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../contextApi/SidebarApiContext";

const SideBar = () => {
   const { showSidebar, toggleSidebar } = useSidebar();

   return (
      <>
         {/* Mobile toggle button */}


         {/* Sidebar */}
         <aside
            id="logo-sidebar"
            className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${showSidebar ? "-translate-x-0" : "-translate-x-full"
               } bg-sky-100 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
            aria-label="Sidebar"
         >
            {/* Sidebar content */}
            <div className="h-full px-3 pb-4 overflow-y-auto bg-sky-100 dark:bg-gray-800">
               <ul className="space-y-2 font-medium">
                  <li>
                     <NavLink
                        to="/message"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-sky-200 dark:hover:bg-gray-700 group"
                     >
                        <img
                           className="w-7 h-7 rounded-full"
                           src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                           alt="user photo"
                        />
                        <span className="ms-3">Dashboard</span>
                     </NavLink>
                  </li>
                  {/* Add more NavLink items as needed */}
               </ul>
            </div>
         </aside>
      </>
   );
};

export default SideBar;
