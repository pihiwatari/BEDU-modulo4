const https = require("https");

const URL = "https://swapi.dev/api/people/";

function getPeople(response) {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk;
  });
  response.on("end", () => {
    let body = JSON.parse(data);
    results = body.results;
    console.log(results);
    // rest of code

    results.sort((a, b) => {
      if (a.films.length < b.films.length) {
        let temp;
        temp = a;
        a = b;
        b = temp;
      }
    });

    console.log(results);
  });
}

console.log("app start");

https.request(URL, getPeople).end();

console.log("app end");
