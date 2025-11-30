
const { render } = require('pug');
const Product = require('../models/products');


exports.getAddProduct=(req, res, next) => {
  res.render('admin/add-product', { pageTitle: 'Add Product', path: '/admin/add-product', activeAddProduct: true, productCss: true , formCss: true });
}

exports.postAddProduct=(req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
}

exports.getProducts=(req, res, next) => {
   Product.fetchAll((products) => {
      renderShopPage(res, products);
   });
}

 renderShopPage = (res, products) => {
  console.log('shop.js', products);
  res.render('shop/product-list', { prods: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0, activeShop: true, productCss: true });  
}  