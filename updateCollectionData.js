const { MongoClient }  = require("mongodb");
const uri = require("./MongoUri");


const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const update = async (dbName, collectionName, findData, setdata) => {
    try {
        await client.db(dbName).collection(collectionName).updateOne(findData, {$set: setdata})
        console.log("update successfully");
    } catch (error) {
        console.log(error)
    }
}

module.exports = update;