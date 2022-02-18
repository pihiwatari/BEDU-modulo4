const https = require("https");
function getAPOD() {
  https
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", (resp) => {
      let data = "";

      resp.on("data", (chunk) => {
        data += chunk;
      });

      resp.on("end", () => {
        let body = JSON.parse(data);
        console.log(body.url);
        return body;
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
}

const imageURL = getAPOD();

module.exports = imageURL;
