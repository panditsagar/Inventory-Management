import React from 'react';

const Modal = ({ isOpen, children, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="absolute inset-0 bg-opacity-30 flex justify-center items-start mt-40">
            <div className="bg-white p-2 rounded shadow-lg w-[60%] mr-10 ml-40 border">

                <button onClick={onClose} className="float-right text-xl cursor-pointer">&times;</button>

                {children}
            </div>
            
        </div>
    );
};

export default Modal;