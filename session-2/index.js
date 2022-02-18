const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "/ejemplo_1.txt");

// fs.writeFile(
//   filepath,
//   "Este es el contenido de mi archivo",
//   {
//     encoding: "utf8",
//   },
//   // callback
//   (err) => {
//     if (err) return console.error(err);
//   }
// );

// fs.readFile(
//   path.join(__dirname, "/ejemplo_1.txt"),
//   { encoding: "utf-8" },
//   function (error, data) {
//     if (error) return console.error(error);
//     console.log("readFile:", data);
//   }
// );

// fs.appendFile(
//   path.join(__dirname, "/ejemplo_1.txt"),
//   "\nEsto es una nueva línea",
//   (err) => {
//     if (err) throw err;
//     console.log("appendFile", "Archivo actualizado!");
//   }
// );
