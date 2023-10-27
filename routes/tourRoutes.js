const express = require("express");
const tourController = require("../controllers/tourController");

const router = express.Router();

// router.param("id", tourController.checkId);

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.addNewTour);

router
  .route("/top-5-cheep")
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route("/tour-states").get(tourController.getYourStates);
router.route("/monthly-plan/:year").get(tourController.getMonthlyPlan);
// Middleware for validation
// tourController.checkBody
router
  .route("/:id")
  .get(tourController.getTourById)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
