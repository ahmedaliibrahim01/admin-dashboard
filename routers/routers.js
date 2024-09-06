const express = require("express");
const router = express.Router();

const db = require("../data/db");

router.get("/customer-register", (req, res) => {
  res.render("customer-register");
});

router.post("/customer-register", async (request, response) => {
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  try {
    await db.execute("INSERT INTO admin (firstName, lastName) VALUES (?,?)", [
      firstName,
      lastName,
    ]);
    response.redirect("/customer-list");
  } catch (err) {
    console.log(err);
  }
});

router.get("/customer-list", async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM admin");
    res.render("customer-list", { data: results });
  } catch (err) {
    console.error("Veri çekme hatasi:", err);
    res.status(500).send("Veri çekme hatasi");
  }
});

router.get("/customer-list/:customerid", async (req, res) => {
  const id = req.params.customerid;
  try {
    const [customerList] = await db.execute(
      "SELECT * FROM admin WHERE id = ?",
      [id]
    );
    const customer = customerList[0];
    res.render("customer-detail", { customer: customer });
  } catch (err) {
    console.error("Veri çekme hatasi:", err);
    res.status(500).send("Veri çekme hatasi");
  }
});

router.get("/", function (req, res) {
  res.render("index");
});
module.exports = router;
