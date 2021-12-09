const { MongoClient }  = require("mongodb");
const uri = require("./MongoUri");


const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const deleteCollection = async (dbName, collectionName, data) => {
    try {
        await client.db(dbName).collection(collectionName).deleteOne(data)
        console.log("deleted successfully");
    } catch (error) {
        console.log(error)
    }
}
module.exports = deleteCollection;