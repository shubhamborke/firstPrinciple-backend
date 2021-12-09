const { MongoClient } = require("mongodb");
const uri = require("./MongoUri");


const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const mongo = async (dbName, collectionName, userData) => {
  try {
    await client.connect();
    await client.db(dbName).collection(collectionName).insertOne(userData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongo;
