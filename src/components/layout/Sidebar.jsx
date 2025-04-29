import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import menus from '../../configs/menus';

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const sidebarRef = useRef(null);
    const navigate = useNavigate();

    const toggleMenu = (label) => {
        setActiveMenu(prev => (prev === label ? null : label));
        setActiveSubMenu(null);
    };

    const handleSubmenuClick = (submenu) => {
        if (submenu.path) {
            navigate(submenu.path);
        }
        if (submenu.subitems) {
            setActiveSubMenu(prev => (prev === submenu.label ? null : submenu.label));
        } else {
            setActiveSubMenu(null);
        }
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setActiveMenu(null);
                setActiveSubMenu(null);
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
            <div className="w-40 bg-gray-200 min-h-screen p-4 flex flex-col relative z-20">
                {menus.map((menu, index) => (
                    <div
                        key={index}
                        onClick={() => toggleMenu(menu.label)}
                        className="cursor-pointer text-2xl font-bold text-center mb-4 mt-5"
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
                        className="absolute top-20 left-40 bg-gray-100 shadow-lg p-4 rounded-md flex flex-col gap-3 w-60 z-10"
                    >
                        {menu.submenus.map((submenu, j) => (
                            <div key={j}>
                                {/* Submenu label and toggle/click */}
                                <div
                                    onClick={() => handleSubmenuClick(submenu)}
                                    className="flex items-center justify-between cursor-pointer"
                                >
                                    <span className="text-xl font-medium  text-gray-700 hover:underline">
                                        {submenu.label}
                                    </span>
                                    {submenu.subitems && (
                                        <span className="ml-2 text-sm text-blue-600">
                                            {/* {activeSubMenu === submenu.label ? '-' : '+'} */}
                                        </span>
                                    )}
                                </div>

                                {/* Subitems */}
                                {submenu.subitems && activeSubMenu === submenu.label && (
                                    <div className="ml-4 mt-2 flex flex-col gap-2 cursor-pointer">
                                        {submenu.subitems.map((item, k) => (
                                            <div
                                                key={k}
                                                className="text-base text-gray-600 hover:underline"
                                            >
                                                {item.label}
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
