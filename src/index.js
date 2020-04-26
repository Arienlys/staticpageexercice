const express = require("express");
const app = express();
const port = 3010;

const appointments = [];

app.use(express.static("public"));
app.use(express.json()); // for parsing application/json

app.post("/api/appointment", function (req, res) {
  appointments.push(req.body);
  res.send(appointments);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
