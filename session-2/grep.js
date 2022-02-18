const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "/input.txt"),
  { encoding: "utf-8" },
  function (error, data) {
    if (error) return console.error(error);
    // console.log("readFile:", data);
    // reto
    let char = 0;
    let spaces = 0;
    let lines = 0;
    for (letter in data) {
      if (data.charCodeAt(letter) == 32) {
        spaces++;
      } else if (data.charCodeAt(letter) == 10) {
        lines++;
      }

      char++;
    }
    console.log("Numero de caracteres: " + char);
    console.log("Numero de lineas: " + (lines + 1));
    console.log("Numero de espacios: " + spaces);
  }
);
