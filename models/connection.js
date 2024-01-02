

import { Sequelize } from "sequelize";

const mySequelize = new Sequelize(
  'signup',
  'root', "",
  {
    host: 'localhost',
    dialect: "mysql",
    dialectModule: require("mysql2"),
  }
);

mySequelize
  .authenticate()
  .then(() => console.log("MySQL Database Connected."))
  .catch((error) =>
    console.log("ERROR::", error?.message || "Database Connection Error!")
  );

mySequelize.sync();

export const connectDB = async () => {
  try {
    mySequelize.authenticate();
    console.log("Database Connected!");
  } catch (error) {
    console.log("MySQL Connection ERROR::", error?.message);
  }
};

export default mySequelize;