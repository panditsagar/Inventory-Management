import Products from "./Products";

const masterForms = {
    'Employee': {
      title: 'Add Employee',
      fields: [
        { name: 'name', label: 'Name', type: 'text ', },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'position', label: 'Position', type: 'text' },
        { name: 'phone', label: 'Phone Number', type: 'text' },
      ],
    },
    'Department': {
      title: 'Add Department',
      fields: [
        { name: 'departmentName', label: 'Department Name', type: 'text' },
        { name: 'head', label: 'Department Head', type: 'text' },
      ],
    },

    'Products':{
      label: 'Add Product',
      model: Products // 🔗 Connect the imported model directly here
    }
  };
  
export default masterForms;