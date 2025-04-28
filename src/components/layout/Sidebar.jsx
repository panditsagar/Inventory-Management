import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isEventOpen, setIsEventOpen] = useState(false);
    const [isTransactionOpen, setIsTransactionOpen] = useState(false);

    const sidebarRef = useRef(null);  // We track the entire sidebar

    const toggleEventMenu = () => {
        setIsEventOpen(!isEventOpen);
        if (isEventOpen) {
            setIsTransactionOpen(false); // Also close transaction when closing eventory manually
        }
    };

    const toggleTransactionMenu = () => {
        setIsTransactionOpen(!isTransactionOpen);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsEventOpen(false);
                setIsTransactionOpen(false);
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
                <div
                    onClick={toggleEventMenu}
                    className="cursor-pointer text-2xl font-bold text-center mb-4 mt-5"
                >
                    Inventory
                </div>
            </div>

            {/* Sub Sidebar */}
            {isEventOpen && (
                <div className="absolute top-20 left-40 bg-gray-100 shadow-lg p-4 rounded-md flex flex-col gap-3 w-60 z-10">
                    {/* Transaction Link */}
                    <Link
                        to="/model?model=Transaction"
                        onClick={toggleTransactionMenu}
                        className="cursor-pointer text-xl font-medium text-gray-700 hover:underline"
                    >
                        Transaction
                    </Link>

                    {/* Transaction Sub-items */}
                    {isTransactionOpen && (
                        <div className="flex flex-col gap-2 mt-2 pl-4">
                            <div
                                 className="text-base text-gray-600 hover:underline"
                            >
                                Purchase
                            </div>
                            <div
                                
                                className="text-base text-gray-600 hover:underline"
                            >
                                Sales
                            </div>
                            <div
                                 
                                className="text-base text-gray-600 hover:underline"
                            >
                                Stocks
                            </div>
                            <div
                                 
                                className="text-base text-gray-600 hover:underline"
                            >
                               Hold/Unhold Stock
                            </div>
                            <div
                                 
                                 className="text-base text-gray-600 hover:underline"
                             >
                                Sales Screens
                             </div>
                             <div
                                 
                                 className="text-base text-gray-600 hover:underline"
                             >
                                Purchase Screens
                             </div>
                             <div
                                 
                                 className="text-base text-gray-600 hover:underline"
                             >
                                 Stock Reconciliation
                             </div>
                             <div
                                 
                                 className="text-base text-gray-600 hover:underline"
                             >
                                Stock Allocation
                             </div>
                        </div>
                    )}

                    {/* Other Main Links */}
                    <div className="cursor-pointer text-xl font-medium text-gray-700 hover:underline">
                        Reports
                    </div>
                    <div className="cursor-pointer text-xl font-medium text-gray-700 hover:underline">
                        Order Management
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
