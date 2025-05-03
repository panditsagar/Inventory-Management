// menu.js
const menus = [
  {
    label: "Home",
    category: "Main",
    submenus: [
      {
        label: "Masters",
        subitems: [ 
          {
            label: "Item",
                  subitems: [
              {
                label: "Item",
                path: "/model?model=Item"
                
              },
            ],
            },
          ],
      },
    ],
  },
  
  {
    label: "Inventory Management",
    category: "Main",
    submenus: [
      {
        label: "Transaction",
        subitems: [ // You can keep this if needed later
          {
            label: "Purchase",
                  subitems: [
              {
                label: "Request for Quote",
                path: "/model?model=Transaction"
                // path: "/model?model=Transaction/Purchase/Request_for_Quote"
              },
              {
                label: "Purchases Quotations-standard",
                path: "/model?model=Transaction"
                // path: "/model?model=Transaction/Purchase/Purchases_Quotations_standard"
              },
              {
                label: "Purchases Orders Standard",
                path: "/model?model=Transaction"
                // path: "/model?model=Transaction/Purchase/Purchases_Orders_Standard"
              },
              {
                label: "Material Receipt Notes",
                path: "/model?model=Transaction"
                // path: "/model?model=Transaction/Purchase/Material_Receipt_Notes"
              },
              {
                label: "Purchase Quotation",
                path: "/model?model=Transaction"
                // path: "/model?model=Transaction/Purchase/Purchase_Quotation"
              },
              {
                label: "PO Screen Test",
                path: "/model?model=Transaction"
                // path: "/model?model=Transaction/Purchase/PO_Screen_Test"
              },
            ],
          },
          { label: "Sales" },
          { label: "Stocks" },
          { label: "Hold/Unhold Stock" },
          { label: "Sales Screens" },
          { label: "Purchase Screens" },
          { label: "Stock Reconciliation" },
          { label: "Stock Allocation" },
        ],
      },
    { label: "Reports" },
    { label: "Order Management" },
    ],  
  },
  { // Finance Management Module
    label: "Financial Accounting",
    category: "Finance Management",
    submenus: [
      {
        label: "Masters",
        path: "/model?model=FinancialAccounting/Masters",
        subitems: [
          {
            label: "COA (Chart of Accounts)",
            path: "/model?model=FinancialAccounting/Masters/COA"
          },
          {
            label: "Products",
            path: "/model?model=FinancialAccounting/Masters/products"
          },
         ]
      },
      {
        label: "Receipts",
        path: "/model?model=FinancialAccounting/Receipts"
      },
      {
        label: "Stock Internal Transfer",
        path: "/model?model=FinancialAccounting/Stock_Internal_Transfer"
      },
      {
        label: "Delivery Note (Challan)",
        path: "/model?model=FinancialAccounting/Delivery_Note"
      },
      {
        label: "Shortage in Stock",
        path: "/model?model=FinancialAccounting/Shortage_in_Stock"
      },
      {
        label: "Excess in Stock",
        path: "/model?model=FinancialAccounting/Excess_in_Stock"
      }
    ]
  },

];

export default menus;
