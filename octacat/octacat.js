/*
  p5.js is a JavaScript library to make coding accessible
  for artists, designers, educators, and beginners.

  Read the docs at https://p5js.org/reference/
  Check out examples at https://p5js.org/examples/

  octocat.js is a JavaScript library to make octocats.
  Read the docs at https://github.com/octocademy/octocat.js
*/
import p5 from "p5.js";
import Octocat from "octocat.js";

let octocat;

p5.setup = () => {
  createCanvas(300, 300);
  octocat = new Octocat();

  // Put your cursor below the arrows to start editing
  // then click on an octocat setting to insert it
  // in your code. When you make changes, your octocat
  // will automatically update!
  //
  // ⬇️️️️️️️️️️️️️️️️️️️️️️️️⬇️⬇️⬇️⬇️

  octocat.setEyes("Neutral")
  octocat.setFaceColor({ face: "#FFC5AF", nose: "#A34F3E" })
  octocat.setEyes("Happy Open")
  octocat.setTop("Sari")
  octocat.setTop("Kimono")
  octocat.setHair("Afro Side Part")
  octocat.setHair("Ponytail Low")
  octocat.setHairColor("#000000")
  octocat.setProp("Sponsor Heart")
  octocat.setPuddleColor("#9EA294")
  octocat.setPuddleColor("#701B09")
  octocat.setPuddleColor("#B3682B")
  octocat.setPuddleColor("#9DC877")
  octocat.setPuddleColor("#5D8D33")
  octocat.setPuddleColor("#54A0B9")
};

// ♻️ The draw method gets called repeatedly
// you can make changes here to animate!
p5.draw = () => {
  background("white");
  octocat.draw();
};
