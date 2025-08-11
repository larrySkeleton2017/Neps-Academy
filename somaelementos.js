const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = parseInt(input[0]);
const numeros = input[1].split(" ").map(Number);

let soma = 0;
for (let i = 0; i < N; i++) {
  soma += numeros[i];
}

console.log(soma);
