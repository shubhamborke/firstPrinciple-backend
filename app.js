const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const insertCollectionData = require("./insertCollectionData");
const createCollectionData = require("./createCollectionData");
const updateCollectionData = require("./updateCollectionData");
const deleteCollectionData = require("./deleteCollectionData");

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.get("/home", (req, res) => {
  res.send("hello there");
});

app.post("/home", cors(), async (req, res) => {
  const result = await req.body;
  console.log(result);
  try {
    // for insert data
    await insertCollectionData(
      "firstPrinciple",
      "firstPrncipleCollection",
      result
    )
      .then(() => console.log("database Created"))
      .catch((err) => console.log(err));
    // for create data
    await createCollectionData(
      "firstPrinciple",
      "firstPrncipleCollection",
      result
    )
      .then(() => console.log("database Created"))
      .catch((err) => console.log(err));

    // for update data
    await updateCollectionData(
      "firstPrinciple",
      "firstPrncipleCollection",
      { name: "name" },
      result
    )
      .then(() => console.log("database Created"))
      .catch((err) => console.log(err));

    //for delete data
    await deleteCollectionData("firstPrinciple", "firstPrncipleCollection", {
      name: "name",
    })
      .then(() => console.log("database Created"))
      .catch((err) => console.log(err));
    res.send("data collected by backend");
  } catch (error) {
    console.log(error);
  }
});

app.listen(4000);
