import React, { useState } from 'react';
import Modal from '../../components/common/Modal';
import InputField from '../../components/common/InputField';

const FormDrawer = ({ modelConfig, isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e, fieldName) => {
        setFormData({ ...formData, [fieldName]: e.target.value });
    };

    const handleSubmit = () => {
        onSubmit(formData);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col p-6  w-full">

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


            </div>
        </Modal>
    );
};

export default FormDrawer;
