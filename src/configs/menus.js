// menu.js
const menus = [
  {
    label: "Inventory",
    category: "Main",
    submenus: [
      {
        label: "Transaction",
        path: "/model?model=Transaction",
        subitems: [ // You can keep this if needed later
          { label: "Purchase" },
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
];

export default menus;
