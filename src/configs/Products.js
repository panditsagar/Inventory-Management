const Products = {
    name: 'Products',
    title: 'Products Details',
    fields: [
        { 
            name: 'general_information', 
            label: 'General Information', 
            type: 'dropdown', 
         },
        { 
            name: 'attributes_variants', 
            label: 'Attributes and Variants', 
            type: 'string', 
        }, 
        { 
            name: 'inventory', 
            label: 'Inventory', 
            type: 'string', 
        },

        { 
            name: 'accounting', 
            label: 'Accounting', 
            type: 'string', 
        },
    ]
};
export default Products;