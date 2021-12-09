const { MongoClient }  = require("mongodb");
const uri = require("./MongoUri");


const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const create = async (dbName, collectionName, data) => {
    try {
        await client.db(dbName).collection(collectionName).insertOne(data)
        console.log("created successfully");
    } catch (error) {
        console.log(error)
    }
}

module.exports = create;