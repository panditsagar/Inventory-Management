const General_Information = {
  name: "GeneralInformation",
  title: "General Information",
  fields: [
    {
      name: "product_type",
      label: "Product Type",
      type: "dropdown",
      options: ["Goods", "Service", "Combo"],
    },

    {
      name: "invoicing_policy",
      label: "Invoicing Policy",
      type: "dropdown",
      options: ["Ordered Quantities", "Delivered Quantities"],
    },

    {
      name: "track_inventory",
      label: "Track Inventory",
      type: "dropdown",
      options: ["By Units Serial Number", "By Lots", "By Quantity"],
    },

    {
      name: "quantity_on_hand_units",
      label: "Quantity On Hand Units",
      type: "number",
    },

    {
      name: "sales_price_inunits",
      label: "Sales Price In Units",
      type: "number",
    },
    {
      name: "sales taxes",
      label: "Sales Taxes (%)",
      type: "number",
    },

    {
      name: "avatax category",
      label: "Avatax Category",
      type: "string",
    },

    {
      name: "cost_perunits",
      label: "Cost Per Units",
      type: "number",
    },

    {
      name: "purchase_taxes",
      label: "Purchase Taxes",
      type: "number",
    },

    {
      name: "category",
      label: "Category",
      type: "string",
    },

    {
      name: "reference",
      label: "Reference",
      type: "string",
    },

    {
      name: "barcode",
      label: "Barcode",
      type: "string",
    },

    {
      name: "company",
      label: "Company",
      type: "string",
    },
  ],
};

export default General_Information;
