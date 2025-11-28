const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const A = parseInt(input[0]); // número de alunos
const M = parseInt(input[1]); // número de monitores

if (A + M <= 50) {
  console.log("S");
} else {
  console.log("N");
}