const mongoose = require("mongoose");

const dotenv = require("dotenv");
const app = require("./app");

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
  .then((con) => {
    console.log("\x1b[36m%s\x1b[0m", "DB Connected");
  });

// const testTour = new Tour({
//   name: "The Forest Hiker",
//   price: 794,
//   rating: 4.9,
// });

// testTour
//   .save()
//   .then((doc) => console.log(doc))
//   .catch((err) => console.error("💥Error", err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
