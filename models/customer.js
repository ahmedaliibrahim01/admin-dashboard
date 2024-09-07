const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Customer = sequelize.define("Customer", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: "customers", // Tablo adını burada belirliyorsun
});

async function sync() {
  try {
    await Customer.sync({alter : true});
    console.log("Customer table synced");
  } catch (error) {
    console.error("Error syncing Customer model:", error);
  }
}

sync();

module.exports = Customer;
