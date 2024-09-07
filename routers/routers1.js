/*
const express = require("express");
const router = express.Router();

const User = require('../models/customer'); // Sequelize modelini içe aktarıyoruz

// Kayıt sayfası render edilir
router.get("/customer-register", (req, res) => {
  res.render("customer-register");
});

router.post('/customer-register', async (req, res) => {
  const { firstName, lastName } = req.body;
  const newUser = await User.create({ firstName, lastName });
  res.redirect('/customer-list');


});

// Kullanıcı listeleme
router.get("/customer-list", async (req, res) => {
  try {
    // Veritabanından tüm kullanıcıları getiriyoruz
    const customers = await User.findAll();

    // EJS sayfasına gelen verileri gönderiyoruz    res.render("customer-list", { data: customers });
  } catch (err) {
    console.error("Veri çekme hatası:", err);
    res.status(500).send("Veri çekme hatası");
  }
});

// Kullanıcı silme işlemi sayfası
router.get("/customer-delete/:customerid", async (req, res) => {
  const id = req.params.customerid;
  try {
    const customer = await User.findByPk(id); // ID ile kullanıcıyı bul
    res.render("customer-delete", { customer });
  } catch (err) {
    console.error("Veri çekme hatasi:", err);
    res.status(500).send("Veri çekme hatası");
  }
});

// Kullanıcıyı silme işlemi
router.post("/customer-delete/:customerid", async (req, res) => {
  const id = req.params.customerid;
  try {
    await User.destroy({ where: { id } }); // Kullanıcıyı sil
    res.redirect("/customer-list");
  } catch (err) {
    console.error("Veri silme hatası:", err);
    res.status(500).send("Veri silme hatası");
  }
});

// Kullanıcı düzenleme işlemi sayfası
router.get("/customer-edit/:customerid", async (req, res) => {
  const id = req.params.customerid;
  try {
    const customer = await User.findByPk(id); // ID ile kullanıcıyı bul
    res.render("customer-edit", { customer });
  } catch (err) {
    console.error("Veri çekme hatası:", err);
    res.status(500).send("Veri çekme hatası");
  }
});

// Kullanıcı düzenleme işlemi
router.post("/customer-edit/:customerid", async (req, res) => {
  const id = req.params.customerid;
  const { firstName, lastName } = req.body;

  try {
    await User.update(
      { firstName, lastName },  // Güncellenecek alanlar
      { where: { id } }         // Şarta göre güncelleme (id eşleşiyor mu?)
    );
    res.redirect("/customer-list");
  } catch (err) {
    console.error("Veri güncelleme hatası:", err);
    res.status(500).send("Veri güncelleme hatası");
  }
});

// Ana sayfa render edilir
router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;

*/