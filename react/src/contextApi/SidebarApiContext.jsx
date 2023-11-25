import React, { createContext, useContext, useState } from "react";

// Create a new context for sidebar visibility
const SidebarContext = createContext();

// Custom hook to access the sidebar context
export const useSidebar = () => useContext(SidebarContext);

// Sidebar provider component
export const SidebarProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar((prev) => !prev);
    };

    return (
        <SidebarContext.Provider value={{ showSidebar, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};
