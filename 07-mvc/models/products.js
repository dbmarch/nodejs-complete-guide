const fs = require('fs');
const path = require('path');


getDatabasePath = ()=>path.join(path.dirname(require.main.filename), 'data', 'products.json');

getProductsfromFile = (cb) => {
   fs.readFile(getDatabasePath(), (err, fileContent) => {
      if (err) {
         return cb([]);
      }
      cb(JSON.parse(fileContent));
   });
};

module.exports = class Product {
   constructor(title) {
     this.title = title;
   }

   save() {
      getProductsfromFile((products) => { 
         products = [...products, this];
         fs.writeFile(getDatabasePath(), JSON.stringify(products), (err) => {
            console.log('write error', err);
         });
      })
   }
   
   static fetchAll(cb) {
      getProductsfromFile((products) => cb(products));
   };
      
};