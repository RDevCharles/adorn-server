var express = require('express');
var router = express.Router();
const PaymentCntrl =require("../controllers/payments")
const DataCntrl =require("../controllers/data")

//https://localhost:3000/api/get-products
router.get("/get-products", DataCntrl.fetchData);
router.post("/add-to-mailing-list", DataCntrl.mailingList);

//https://localhost:3000/api/create-payment-intent
router.post("/create-payment-intent", PaymentCntrl.createPaymentIntent );




module.exports = router;
