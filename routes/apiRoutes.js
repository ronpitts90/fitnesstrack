const Workout = require("../models/workout");

const router = require("express").Router();

// Reads workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((db) => {
      res.json(db);
    })
    .catch((err) => {
      res.json(err);
    });
});

//   adds new workout
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((db) => res.json(db))
    .catch((err) => {
      console.log("err", err);
      res.json(err);
    });
});

//   updates workouts by id
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then((db) => {
      res.json(db);
    })
    .catch((err) => {
      res.json(err);
    });
});

//  stats
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((db) => {
      res.json(db);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
module.exports = router;