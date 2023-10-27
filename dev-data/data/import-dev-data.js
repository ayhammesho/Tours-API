const fs = require("fs");

const mongoose = require("mongoose");

const dotenv = require("dotenv");
const Tour = require("../../models/tourModels");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("\x1b[36m%s\x1b[0m", "DB Connected");
  });

const data = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8")
);

const importAllData = async () => {
  try {
    await Tour.create(data);
  } catch (err) {
    console.log(err.message);
  }
  process.exit();
};

const deleteAllData = async () => {
  try {
    await Tour.deleteMany();
  } catch (err) {
    console.log(err.message);
  }
};

if (process.argv[2] == "--import") {
  importAllData();
  console.log("Data Imported Successfully");
} else if (process.argv[2] == "--delete") {
  deleteAllData();
  console.log("Data Deleted Successfully");
}

console.log(process.argv);
