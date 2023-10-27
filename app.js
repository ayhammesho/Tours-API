const express = require("express");
const morgan = require("morgan");

const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

// 1) MIddleWares
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

// app.use((req, res, next) => {
//   console.log("Hello From the MiddleWare");
//   next();
// });

app.use((req, res, next) => {
  req.requestedTime = new Date().toISOString();
  next();
});

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// 2) Route Handlres

// Users

// 3) Routes

// app.get("/api/v1/tours", getAllTours);
// app.post("/api/v1/tours", addNewTour);
// app.get("/api/v1/tours/:id", getTourById);
// app.patch("/api/v1/tours/:id", updateTour);
// app.delete("/api/v1/tours/:id", deleteTour);

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

// 4) Start the Server

module.exports = app;
