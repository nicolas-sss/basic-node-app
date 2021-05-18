const app = express();

const cors = require("cors");

const express = require("express");

const PORT = 5000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use((req, res) => {
  const inspectValues = {
    url: req.url,
    method: req.method,
    params: req.params,
    body: req.body,
    headers: req.headers,
  };
  console.log(inspectValues);
  res.send({ inspectValues });
});

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});