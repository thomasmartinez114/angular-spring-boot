import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach;
let myGolfCoach = new GolfCoach;

// declare an array of coaches
let theCoaches: Coach[] = [];


// add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);
// console.log(theCoaches);

for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}