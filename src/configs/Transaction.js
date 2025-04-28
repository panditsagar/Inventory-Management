const Transaction = {
    name: 'Transaction',
    title: 'Transaction Details',
    fields: [
        { 
            name: 'document_no', 
            label: 'Document No.', 
            type: 'dropdown', 
            options: ['DOC-001', 'DOC-002', 'DOC-003', 'DOC-004'] 
        },
        { 
            name: 'date', 
            label: 'Date', 
            type: 'date', 
            dateFormat: 'DD/MM/YYYY',   
            default: new Date(2025, 3, 28)   
        }, 
        { 
            name: 'vendor_account', 
            label: 'Vendor Account', 
            type: 'dropdown', 
            options: ['VENDOR-001', 'VENDOR-002', 'VENDOR-003'] 
        },
        { name: 'narration', label: 'Narration', type: 'string' }
    ]
};
export default Transaction;