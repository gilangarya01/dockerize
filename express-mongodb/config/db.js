// Import module
const { MongoClient } = require("mongodb");

// Connection to database
async function connectToDB() {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    return client.db("myDb");
  } catch (error) {
    console.error("Connection error", error);
    throw new Error("Database connection failed");
  }
}

module.exports = { connectToDB };
