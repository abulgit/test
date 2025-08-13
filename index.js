const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

// Custom morgan format: method, url, status, IP, response time
morgan.token("ip", (req) => req.ip);

app.use(
  morgan(":method :url :status :ip - :response-time ms")
);

app.get("/", (req, res) => {
  res.send(`Hello World! Current date and time: ${new Date()}`);
});

app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
});
