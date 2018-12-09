
const Product = require('../models/product.model');

// create product
exports.product_create = function (req, res) {
     let product = new Product(
          {
               name: req.body.name,
               price: req.body.price
          }
     );

     product.save(function (err) {
          if (err) {
               return (err);
          }
          res.send('Product Created successfully')
     })
};

//read product
exports.product_details = function (req, res) {
     Product.findById(req.params.id, function (err, product) {
          if (err) return(err);
          res.send(product);
     })
};


//update product
exports.product_update = function (req, res) {
     Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
          if (err) return(err);
          res.send('Product udpated.');
     });
};


//delete product
exports.product_delete = function (req, res) {
     Product.findByIdAndRemove(req.params.id, function (err) {
          if (err) return(err);
          res.send('Deleted successfully!');
     })
};



//Simple version, without validation or sanitation
exports.test = function (req, res) {
     res.send('Greetings from the Test controller!');
};