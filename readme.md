# Installation and executing the code

`$ https://github.com/resistancet9/appiness_nodejs.git appiness_nodejs`
`$ cd appiness_nodejs `
`$ npm install `

Make sure MongoDB is running on `27017`

`$ npm start `


**Use Postman to consume APIs**
> Path: /get_products_count
   Method:  POST
   Request: { category: `<CATEGORY_ID>` }
   Response: Returns number of products in the given category
   
   #
> Path: /product
   Method:  POST
   Request: { name: `<NAME>`, desc: `<DESC>`, category: `<CATEGORY_ID>` }
   Response: Returns newly saved product
   
   #
>   Path: /product
   Method:  GET
   Request: NA
   Response: Returns all products
   
   #
>   Path: /category
     Method:  GET
     Request: NA
     Response: Returns all categories
 
#
>    Path: /category
     Method: POST
     Request: { name: `<NAMEOFCATEGORY>` }
     Response: Returns newly save category