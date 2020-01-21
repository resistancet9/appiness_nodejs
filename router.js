const Product = require("./models/Product");
const Category = require("./models/Category");
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = function (app) {
  app.get("/ping", function (req, res) {
    res.send("pong")
  });

  /* 
     Path: /category
     Method: POST
     Request: { name: <NAMEOFCATEGORY> }
     Response: Returns newly save category
  */
  app.post('/category', function (req, res) {
    // get name of new category from body.
    let categoryName = req.body.name || "";

    // create the instance
    let newCategory = new Category({ name: categoryName });

    // saving the document to mongodb.
    newCategory.save().then(response => {
      res.send(response);
    })
      .catch(e => console.log(e));
  });

  /* 
     Path: /category
     Method:  GET
     Request: NA
     Response: Returns all categories
  */
  app.get('/category', function (req, res) {
    Category.find({}).then(response => {
      res.send(response);
    })
      .catch(e => console.log(e));
  });

  /* 
   Path: /product
   Method:  GET
   Request: NA
   Response: Returns all products
*/

  app.get('/product', function (req, res) {
    Product.find({}).then(response => {
      res.send(response);
    })
      .catch(e => console.log(e));
  })

  /* 
       Path: /product
       Method:  POST
       Request: { name: <NAME>, desc: <DESC>, category: <CATEGORY_ID> }
       Response: Returns newly saved product
    */
  app.post('/product', function (req, res) {
    let productName = req.body.name || "";
    let productDesc = req.body.desc || "";
    let productCategoryID = req.body.category;

    let newProduct = new Product({ name: productName, desc: productDesc, category: productCategoryID || "" });

    newProduct.save().then(response => {
      res.send(response);
    })
      .catch(e => console.log(e));
  })

  /* 
     Path: /get_products_count
     Method:  POST
     Request: { category: <CATEGORY_ID> }
     Response: Returns number of products in the given category
  */

  app.post('/get_products_count', function (req, res) {
    let productCategoryID = req.body.category;

    Product.find({ category: new ObjectId(productCategoryID) })
      .then(response => {
        res.send({products: response, count: response.length});
      })
  })

};