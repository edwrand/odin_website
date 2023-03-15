// creating the server
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// get request
const https = require("http");

const options = {
  hostname: "127.0.0.1",
  port: 3000,
  path: "/index.html",
  method: "GET",
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();

// end get request

// POST request

const data = JSON.stringify({
  todo: "Buy the milk",
});

const optionsP = {
  hostname: "127.0.0.1",
  port: 3000,
  path: "/index.html",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const reqP = https.request(optionsP, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

reqP.on("error", (error) => {
  console.error(error);
});

reqP.write(data);
reqP.end();
