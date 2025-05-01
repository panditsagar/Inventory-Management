const Sales = {
  'name': 'Sales',
  'title': 'Sales',
  'fields': [
          
          { 
              'name': 'packagings', 
              'label': 'Packagings', 
              'type': 'dropdown', 
              'options': ['Days', 'Pack of 6', 'in','m', 'kg', 'oz', 'ft', 'Ton', 'km','L', 'ft^2', 'lb','gal(US)', 'Hours', 'g', 'ml', 'mm', 'm^2' ] 
          },

          {

          'name': 'optional_products',
          'label': 'Optional Products',
          'type': 'dropdown', 
          'options': ['Acoustic Bloc Screens', 'Aperol Spritz', 'Bacon Burger', 'Bagel', 'Black embroidered t-shirt', 'Blue Denim Jeans', 'Blueberry Muffin', 'Bolt	CONS_89957', 'Booking Fees', 'Bricks' ]          
          },

         {
          
          'name': 'accessory_products',
          'label': 'Accessory Products',
          'type' : 'dropdown', 
          'options': ['Communction', 'WhiteBoard Pen' , 'Screw', 'Bolt','Stool' ] 
  
      },

      {
        
        'name': 'alternative_products',
        'label': 'Alternative Products',
        'type': 'dropdown', 
        'options': ['Acoustic Bloc Screens', 'Aperol Spritz', 'Bacon Burger', 'Bagel', 'Black embroidered t-shirt', 'Blue Denim Jeans', 'Blueberry Muffin', 'Bolt	CONS_89957', 'Booking Fees', 'Bricks' ]  
      },

      {
          'name': 'tags',
          'label': 'Tags',
          'type': 'string'
      },
      {
          'name': 'is_published',
          'label': 'Is Published',
          'type': 'checkbox'
      },

      {
          'name': 'website',
          'label': 'Website',
          'type': 'dropdown', 
          'options': ['Website 1', 'Website 2']  
      },
      
      {
          'name': 'categories',
          'label': 'Categories',
          'type': 'dropdown',
          'options': ['Desks', 'Desks/Components','Desks/Office Desk', 'Furnitures/ Chairs'] 
      },
      {
          'name': 'ecommerce_media',
          'label': 'Ecommerce Media',
          'type': 'media'
      },     
  ]
}

export default Sales;