var express = require('express');
var app = express();

//Reusable controllers
var productController=function(req, res){
  console.log("Invoking  rest api for product list");
  var products = [
    {pid:1, ptitle:"HP-Laptop",pdescription:"electronic-device",pquantity:5, punitprice:45000},
    {pid:2, ptitle:"Dell-Laptop",pdescription:"electronic-device",pquantity:15, punitprice:42000},
    {pid:3, ptitle:"Lenovo-Laptop",pdescription:"electronic-device",pquantity:20, punitprice:35000},
    {pid:4, ptitle:"Acer-Laptop",pdescription:"electronic-device",pquantity:25, punitprice:38000},
    {pid:5, ptitle:"Apple-Ipad",pdescription:"electronic-device",pquantity:15, punitprice:85000},
  ];
  res.send(products);
};

// setting router to map requests  with controllers
app.get ('/products',productController);
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8086", host, port)
})