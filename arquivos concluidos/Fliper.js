const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const [P, R] = input.split(" ").map(Number);

if (P === 1 && R === 1) {
  console.log("A");
} else if (P === 1 && R === 0) {
  console.log("B");
} else {
  console.log("C");
}