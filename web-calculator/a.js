function warnTheSheep(queue) {
  let wolfPos = queue.indexOf("wolf");
  let farmerPos = queue.length - 1;
  if (wolfPos < queue.length - 1) {
    console.log(
      `\'Oi! Sheep number ${
        farmerPos - wolfPos
      }! You are about to be eaten by a wolf!\'`
    );
  } else {
    console.log("Pls go away and stop eating my sheep");
  }
}

warnTheSheep([
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "wolf",
]);
