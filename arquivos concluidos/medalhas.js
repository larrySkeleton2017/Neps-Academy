const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);

// Cria lista com [tempo, número_do_nadador]
const nadadores = [
  [input[0], 1],
  [input[1], 2],
  [input[2], 3]
];

// Ordena pelo tempo (menor primeiro)
nadadores.sort((a, b) => a[0] - b[0]);

// Imprime o número do nadador na ordem ouro, prata, bronze
console.log(nadadores[0][1]);
console.log(nadadores[1][1]);
console.log(nadadores[2][1]);
