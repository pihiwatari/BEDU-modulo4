const https = require("https");
const fs = require("fs");

function descargarImagen(url, filePath) {
  var file = fs.createWriteStream(filePath);
  var request = https.get(url, function (response) {
    response.pipe(file);
  });
  console.log(request);
}

function callback(res) {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    let body = JSON.parse(data);
    const imageUrl = body.url;
    descargarImagen(imageUrl, `${__dirname}/image.jpg`);
  });
}

const getAPOD = https
  .request("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", callback)
  .end();

module.exports = getAPOD;
