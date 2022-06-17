
const breakfastItems = ["eggs","sausages","bacon","porridge","beans","toast","cereal","pancakes"];

console.log(breakfastItems);
console.log(breakfastItems.length);
console.log(breakfastItems.includes("eggs"))
console.log(breakfastItems.indexOf("toast"))

const famAges = [22, 21, 10, 57, 52];
const minAge = Math.min.apply(null,famAges);
const maxAge = Math.max.apply(null,famAges);

console.log(famAges);
console.log(minAge);
console.log(maxAge);

/* .push adds items to end of an array
  .unshift adds items to start of an array
  .pop removes last array position
  .shift moves array back one position
  so item in [0] is the item that was in [1]
*/
