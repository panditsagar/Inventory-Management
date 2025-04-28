import React from 'react';

const InputField = ({ label, value, onChange, type = 'text', options = [] }) => {
    return (
        <div className="flex items-center mb-4">
            {/* Label on left */}
            <label className="w-40 text-sm font-medium text-gray-700">
                {label}
            </label>

            {/* Input on right */}
            <div className="w-full"> {/* Set fixed width for all input fields */}
                {type === 'dropdown' ? (
                    <select
                        value={value}
                        onChange={onChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    >
                        <option value="">Select {label}</option>
                        {options.map((opt, idx) => (
                            <option key={idx} value={opt}>{opt}</option>
                        ))}
                    </select>
                ) : (
                    <input
                        type={type}
                        value={value}
                        onChange={onChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    />
                )}
            </div>
        </div>
    );
};

export default InputField;
