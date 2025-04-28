import React from 'react';

const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="p-2 bg-gray-400 text-white rounded cursor-pointer">
            {children}
        </button>
    );
};

export default Button;