const express = require("express");


const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));



const path = require("path");

const routes = require("./routers/routers");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(3000)
