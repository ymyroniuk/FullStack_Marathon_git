const express = require("express")
const path = require("path"),
  os = require("os");

let new1 = os.hostname();

const app = express()

const PORT = 3000;

app.get("/", (req, res) => {
  //1
  const filename = path.basename(__filename);
  console.log("A name of file of the executed script: " + filename);
  //2
  process.argv.forEach((val, index) => {
    console.log("Arguments passed to the script: " + index + ": " + val);
  });
  //3
  let ip = req.connection.remoteAddress;
   ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log("IP address of the server: " + ip);
  //4
  console.log("A name of host that invokes the current script: " + new1);
  //5
  console.log(req.protocol);
  //6
  console.log(req.headers);
  //7
  console.log(req.headers["user-agent"]);
  //8
  console.log(req.ip);
  //9
  let str = JSON.stringify(req.headers);
  console.log(str);
  res.send("");
});

 
// Как запустишь сервер, открой страницу в браузере, и обнови ее, а за тем посмотри в терминал

app.listen(PORT, "127.0.0.1", function () {
  console.log("http://127.0.0.1:3000 \n Click Ctrl + C for stop server");
});
