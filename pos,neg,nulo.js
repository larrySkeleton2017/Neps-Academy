const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const x = parseInt(input);

if (x > 0) {
  console.log("positivo");
} else if (x < 0) {
  console.log("negativo");
} else {
  console.log("nulo");
}