if (process.argv.length < 3) {
  console.error("Inserta los argumentos requeridos");
  process.exit(1);
}
const processName = process.env.NOMBRE;
let a = Number(process.argv[2]);
let b = Number(process.argv[3]);

if (isNaN(a) || isNaN(b)) {
  console.error("Los argumentos deben ser de tipo numero");
  process.exit(1);
}

const suma = a + b;
console.log("Programado por " + processName);
console.log(`${a} + ${b} = ${suma}`);
