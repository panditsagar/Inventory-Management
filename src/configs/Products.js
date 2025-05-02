const Products = {
    name: 'Products',
    title: 'Products',
    fields: [
        
        { 
            name: 'product', 
            label: 'Product', 
            type: 'String', 
         },

         { 
            name: 'general_information', 
            label: 'General Information', 
            type: 'string', 
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