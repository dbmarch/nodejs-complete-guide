const fs = require('fs');
const path = require('path');

module.exports = class Product {

   constructor(title) {
     this.title = title;
   }

   save() {
      let products = [];
      const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');
      if (fs.existsSync(p)) {
            fs.readFile(p, (err, fileContent) => {
               if (err) {
                  console.log ('read error', err);
               }else{
                  products = JSON.parse(fileContent);
                  console.log('save - reading products', products);
               }
            })
      } else {
         console.log ('file does not exist');
      }
      products.push(this);
      console.log ('save - writing ', products)
      fs.writeFile(p, JSON.stringify(products), (err) => {
         console.log('write error', err);
      });
   }
   
   static fetchAll(cb) {
      const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');
      if (fs.existsSync(p)) {
         fs.readFile(p, (err, fileContent) => {
            if (err) {
               console.log ('error', err);
               return cb([]);
            }
            let products = JSON.parse(fileContent);
            console.log('products', products);
            return cb(products);
         });
      } else {
         console.log ('file does not exist');
      }
   }
};