const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const createDatabase = require("./connectAndCreateDatabase");

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.get("/home", (req, res) => {
  res.send("hello there");
});

app.post("/home", cors(), async (req, res) => {
  const result = await req.body;
  console.log(result)
  try {
        await createDatabase("firstPrinciple", "firstPrncipleCollection", result)
          .then(() => console.log("database Created"))
          .catch((err) => console.log(err));
       res.send("data collected by backend");
  } catch (error) {
      console.log(error)
  }
});

app.listen(4000);
