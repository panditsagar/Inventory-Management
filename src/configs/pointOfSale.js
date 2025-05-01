const pointOfSale = {
    name: 'Point_Of_Sale',
    title: 'Point Of Sales',
    fields: [
            
            { 
                name: 'To_Weight_With_Scale?', 
                label: 'To Weight With Scale?', 
                type: 'checkbox', 
            },

            {

            name: 'category',
            label: 'Category',
            type: 'dropdown', 
             options: ['Misc','Desks','Chairs', 'Upper body', 'Lower body','Others',	'Breads','Pastries', 'Food','Drinks','Cocktails','Soft drinks',	'Events' ] 
            },

           {
            
            name: 'color',
            label: 'Color?',
            type: 'dropdown', 
            options: ['white','yellow', 'red' , 'Blue','Voilet' ] 
    
        },
        {
            name: 'descreption',
            label: 'Descreption',
            type: 'textarea'
        }
    ]
}

export default pointOfSale;