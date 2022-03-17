const { Sequelize, DataTypes, Op } = require("sequelize");

// const sequelize = new Sequelize(
//   "ddhi28mgn08j7f", //db
//   "ulfyskvbahtyjq", //user
//   "65e772500126b74f4d65fdb3a0e8b473a6718d88ba12f6f34545f9c23e92b3ac", //pass
//   {
//     host: "ec2-18-235-114-62.compute-1.amazonaws.com",
//     dialect: "postgres",
//     native: true,
//     ssl: true,
//   }
// );

const sequelize = new Sequelize(
  "my_db", //db
  "elias", //user
  "admin123", //pass
  {
    host: "localhost",
    dialect: "postgres",
    native: true,
    ssl: true,
    logging: console.log,
  }
);

try {
  console.log("Connecting...");
  sequelize.authenticate();
  console.log("Connected to db");
} catch (err) {
  console.error("Error: ", err);
}

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.REAL,
    },
    category: {
      type: DataTypes.TEXT,
    },
  },
  {
    schema: "bedu-shop", // Only if schema differs from "public"
    freezeTableName: true,
    timestamps: false,
  }
);

// INSERT queries
// const product = Product.create({
//   id: 101,
//   name: "last product",
//   description: "lorem lorem lorem",
//   price: 102.25,
//   category: "Weird category",
// }).then((product) => console.log(product.name));

// SELECT queries
// Product.findAll({
//   where: {
//     price: {
//       [Op.gte]: 800,
//     },
//   },
// })
//   .then((obj) => console.log(JSON.stringify(obj, null, 2)))
//   .catch((err) => console.log(err));

// UPDATE queries
Product.update(
  { name: "Other last product" },
  {
    where: {
      id: 101,
    },
  }
)
  .then((obj) => console.log("Updated", JSON.stringify(obj, null, 2)))
  .catch((err) => console.log(err));

// DELETE queries
Product.destroy({
  where: {
    id: 101,
  },
})
  .then(() => console.log("Destroyed"))
  .then(() =>
    Product.findAll({
      order: [["id", "DESC"]],
      limit: 5,
    })
  )
  .then((res) => console.log(JSON.stringify(res, null, 2)))
  .catch((err) => console.log(err));
