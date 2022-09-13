const PORT = 8000;

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json("Hello from the backend");
});

app.listen(PORT, () => console.log("server running on PORT " + PORT));
