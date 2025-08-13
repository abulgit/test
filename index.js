const express = require("express")

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const now = new Date();
  res.send(`Hello World! Current date and time: ${now}`);
});

app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
});
