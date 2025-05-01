import React, { useState, useEffect } from 'react';

const FormDrawer = ({ isOpen, onClose, onSubmit, modelConfig }) => {
  const [formData, setFormData] = useState({});

  // Initialize formData when modelConfig changes
  useEffect(() => {
    if (modelConfig) {
      const initialData = {};
      modelConfig.fields.forEach(field => {
        initialData[field.name] = ''; // Initialize empty values for each field
      });
      setFormData(initialData);
    }
  }, [modelConfig]);

  // Handle input changes
  const handleChange = (e, name) => {
    setFormData(prev => ({
      ...prev,
      [name]: e.target.value
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    onSubmit(formData);
    const existing = JSON.parse(localStorage.getItem('masterData') || '[]');
    localStorage.setItem('masterData', JSON.stringify([...existing, formData]));
    onClose();
  };
  
  if (!isOpen || !modelConfig) return null;

  return (
    <div className="fixed right-0 top-0 w-96 h-full bg-white shadow-lg ml- p-10 z-50 overflow-auto">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
        <button onClick={onClose}>X</button>
      </div>
      <div className="flex flex-col gap-4">
        {modelConfig.fields.map((field, idx) => (
          <div key={idx}>
            <label className="block mb-1 font-medium">{field.label}</label>
            <InputField
  label={field.label}
  type={field.type}
  value={formData[field.name]}
  onChange={(e) => handleChange(e, field.name)}
  options={field.options || []}
/>

          </div>
        ))}
      </div>
    </div>
  );
};

export default FormDrawer;
