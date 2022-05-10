const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const connect = async function () {
  await mongoose.connect(DB).then(() => console.log("🪁 Connected to DB"));
};
connect();

const port = process.env.PORT || 1000;
app.listen(port, () => {
  console.log(`💎 Server is running on port ${port}`);
});
