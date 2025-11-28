const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const [P1, C1, P2, C2] = input.split(" ").map(Number);

const ladoEsquerdo = P1 * C1;
const ladoDireito = P2 * C2;

if (ladoEsquerdo === ladoDireito) {
  console.log(0);
} else if (ladoEsquerdo > ladoDireito) {
  console.log(-1);
} else {
  console.log(1);
}