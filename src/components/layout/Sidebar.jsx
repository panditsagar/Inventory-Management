import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import menus from '../../configs/menus';
 
const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [activeSubSubMenu, setActiveSubSubMenu] = useState(null);
    const sidebarRef = useRef(null);
    const navigate = useNavigate();
 
    const toggleMenu = (label) => {
        setActiveMenu(prev => (prev === label ? null : label));
        setActiveSubMenu(null);
        setActiveSubSubMenu(null);
    };
 
    const handleSubmenuClick = (submenu) => {
        if (submenu.subitems) {
            // It's a parent menu – just expand it
            setActiveSubMenu(prev => (prev === submenu.label ? null : submenu.label));
            setActiveSubSubMenu(null);
        } else if (submenu.path) {
            // Only navigate if it's a leaf node
            navigate(submenu.path);
            setActiveSubMenu(null);
            setActiveSubSubMenu(null);
        }
    };
   
 
    const handleSubSubMenuClick = (item) => {
        if (item.subitems) {
            setActiveSubSubMenu(prev => (prev === item.label ? null : item.label));
        } else if (item.path) {
            navigate(item.path);
            setActiveSubMenu(null);
            setActiveSubSubMenu(null);
        }
    };
   
    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setActiveMenu(null);
                setActiveSubMenu(null);
                setActiveSubSubMenu(null);
            }
        }
 
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
 
    return (
        <div className="relative" ref={sidebarRef}>
            {/* Main Sidebar */}
            <div className="w-60 bg-gray-200 min-h-screen p-5 flex flex-col relative z-10">
                {menus.map((menu, index) => (
                    <div
                        key={index}
                        onClick={() => toggleMenu(menu.label)}
                        className="cursor-pointer text-2xl font-semibold text-center mb-2 mt-2"
                    >
                        {menu.label}
                    </div>
                ))}
            </div>
 
            {/* Sub Sidebar */}
            {menus.map((menu, i) =>
                activeMenu === menu.label && (
                    <div
                        key={i}
                        className="absolute top-20 left-60 bg-gray-100 shadow-lg p-4 rounded-md flex flex-col gap-3 w-64 z-20"
                    >
                        {menu.submenus?.map((submenu, j) => (
                            <div key={j}>
                                <div
                                    onClick={() => handleSubmenuClick(submenu)}
                                    className="flex items-center justify-between font-bold cursor-pointer"
                                >
                                    <span className="text-medium text-gray-700 hover:underline">
                                        {submenu.label}
                                    </span>
                                    {submenu.subitems && (
                                        <span className="m-0 text-gray-600">
                                            {activeSubMenu === submenu.label}
                                        </span>
                                    )}
                                </div>
 
                                {/* Submenu Level 2 (ex: Purchase under Transaction) */}
                                {submenu.subitems && activeSubMenu === submenu.label && (
                                    <div className="ml-5 mt-2  text-sm flex flex-col gap-2">
                                        {submenu.subitems.map((item, k) => (
                                            <div key={k}>
                                                <div
                                                    onClick={() => handleSubSubMenuClick(item)}
                                                    className=" font-semibold cursor-pointer text-gray-700 hover:underline"
                                                >
                                                    {item.label}
                                                </div>
 
                                                {/* Submenu -> SubmenuSubitem Level 3 (ex: Request for Quote under Purchase) */}
                                                {item.subitems && activeSubSubMenu === item.label && (
                                                    <div className="ml-2 mt-1 flex flex-col gap-1">
                                                        {item.subitems.map((subitem, l) => (
                                                            <div
                                                                key={l}
                                                                onClick={() => navigate(subitem.path)}
                                                                className="cursor-pointer text-gray-600 hover:underline"
                                                            >
                                                                {subitem.label}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )
            )}
        </div>
    );
};
 
export default Sidebar;
 
 