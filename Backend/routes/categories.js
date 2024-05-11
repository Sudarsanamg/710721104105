const router = require("express").Router();
const { getProduct } = require("../controller/categories");

router.get('/companyName/:companyname/categories/:categoryname/products',getProduct)

module.exports = router;