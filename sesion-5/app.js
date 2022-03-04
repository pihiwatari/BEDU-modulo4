const express = require("express");
const process = require("process");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});

const gods = [{ name: " Zeus" }, { name: " Hades" }, { name: " Hermes" }];

const constellations = require("./constellations");

app.get("/", (req, res, next) => {
  res.send("<h1>Hola mundo</h1>");
});

app.get("/gods", (req, res, next) => {
  res.send(gods);
});

app.put("/gods/:name", (req, res, next) => {
  const god = req.body;
  gods[req.params.name] = god;
  res.send(god);
});

// ***** RETOS ***** //

app.get("/const", (req, res, next) => {
  res.send(constellations);
});

app.get("/const/:param", (req, res, next) => {
  const { param } = req.params;
  const isName = param.length > 4 ? "name" : "shortName";

  console.log(isName);

  const constellation = constellations.find((item) => item[isName] === param);

  res.send(constellation);
});

// ***** RETOS ***** //
