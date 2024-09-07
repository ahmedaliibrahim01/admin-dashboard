const express = require("express");
const router = express.Router();

const Customer = require("../models/customer"); // Sequelize modelini içe aktarıyoruz

/**
 1. Customer registration
 2. Customer list
 3. Delete Customer
 4. Update customer
*/

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/customer-register", (request, response) => {
  response.render("customer-register");
});

router.post("/customer-register", async (request, response) => {
  await Customer.create(request.body);
  response.redirect("/");
});

router.get("/customer-list", async (request, response) => {
  const customers = await Customer.findAll();
  response.render("customer-list", { data: customers });
});

router.get("/customer-delete/:customerid", async (request, response) => {
  const customerId = request.params.customerid;
  await Customer.destroy({
    where: {
      id: customerId,
    },
  });
  response.redirect("/customer-list");
});

module.exports = router;
