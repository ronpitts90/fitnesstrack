
module.exports = {
  // Exercise : require("./exercise"), (not needed) there is no exercise file to require in models 
  Workout : require("./workout"),
}


// init();

// async function init() {
//   if (location.search.split("=")[1] === undefined) {
//     const workout = await API.getLastWorkout();
//     if (workout) {
//       location.search = "?id=" + workout._id;
//     } else {
//       document.querySelector("#continue-btn").classList.add("d-none")
//     }
//   }
// }

