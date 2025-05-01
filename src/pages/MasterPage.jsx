import React, { useState } from 'react';
import FormDrawer from '../model/views/FormDrawer';
import masterForms from '../configs/masterForms';

const MasterPage = () => {
  const [selectedForm, setSelectedForm] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Open the selected form when a button is clicked
  const openForm = (formName) => {
    setSelectedForm(masterForms[formName]);
    setIsDrawerOpen(true);  // Open the Form Drawer
  };

  // Handle form submission and save data to localStorage
  const handleSubmit = (data) => {
    const formConfig = selectedForm;
    const storedData = JSON.parse(localStorage.getItem(formConfig.storageKey)) || [];
    storedData.push(data);
    localStorage.setItem(formConfig.storageKey, JSON.stringify(storedData));
    setIsDrawerOpen(false);
    alert('Data added successfully!');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center font-bold mb-10 border-1">Master</h1>

      {/* Buttons to open different forms */}
      <div className="grid grid-cols-2 gap-4 m-10">
        {Object.keys(masterForms).map((formName, idx) => (
          <button
            key={idx}
            className="bg-gray-500 text-white p-3 rounded border-1 hover:bg-gray-700"
            onClick={() => openForm(formName)} // Open the form when clicked
          >
            {formName}
          </button>
        ))}
      </div>

      {/* Render the FormDrawer when a form is selected */}
      {selectedForm && (
        <FormDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}  // Close the form drawer
          onSubmit={handleSubmit}
          modelConfig={selectedForm}
        />
      )}
    </div>
  );
};

export default MasterPage;
