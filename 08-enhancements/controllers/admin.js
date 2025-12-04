
const { render } = require('pug');
const Product = require('../models/products');


exports.getAddProduct=(req, res, next) => {
  res.render('admin/add-product', { 
    pageTitle: 'Add Product', 
    path: '/admin/add-product',
    });
}

exports.postAddProduct=(req, res, next) => {
  const product = new Product(req.body.title, req.body.imageUrl, req.body.description, req.body.price);
  product.save();
  res.redirect('/');
}

exports.getProducts=(req, res, next) => {
  console.log ('In getProducts');
  Product.fetchAll((products) => {
    console.log (products);
    res.render('admin/products', { 
      prods: products, 
      pageTitle: 'Admin Products',  
      path: '/admin/products',
    });  
  });
} 