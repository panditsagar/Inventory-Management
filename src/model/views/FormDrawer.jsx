import React, { useState } from 'react';
import Modal from '../../components/common/Modal';
import InputField from '../../components/common/InputField';

const FormDrawer = ({ modelConfig, isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e, fieldName) => {
        setFormData({ ...formData, [fieldName]: e.target.value });
    };

    const handleSubmit = () => {
        const isValid = modelConfig.fields.every(field => !field.required || formData[field.name]);
    if (!isValid) {
        alert("Please fill all required fields.");
        return;
    }

    onSubmit(formData);
    setFormData({});
    onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="p-6 md:p-10 max-w-4xl w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {modelConfig.fields.map((field, idx) => (
                        <div key={idx} className="w-full">
                            <InputField
                                label={field.label}
                                type={field.type === 'multiline' ? 'multiline' : (field.type === 'dropdown' ? 'dropdown' : field.type)}
                                options={field.options || []}
                                value={formData[field.name] || ''}
                                onChange={(e) => handleChange(e, field.name)}
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex justify-end">
                    <button
                        //type='submit'
                        onClick={handleSubmit}
                        className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition"
                    >
                        Add
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default FormDrawer;
