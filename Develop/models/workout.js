const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day:   {
    type: Date,
    required: "String is Required",
    default: Date.now()
  },

  exercises: [
      {
   type: {
       type: String,
       required: true
   },
   name: {
       type : String,
       required: true
   }, 
   duration : {
       type : Number,
       required: true 
   }, 
   weight : {
       
   }
  }
]
});

const Workout = mongoose.model("Example", workoutSchema);

module.exports = Workout;