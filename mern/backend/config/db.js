// Import the MongoClient from the mongodb package
const { MongoClient } = require("mongodb");

// Function to establish a connection to the MongoDB database
async function connectToDB() {
  try {
    // Connect to the MongoDB server using the connection URL from environment variables
    const client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB"); // Log success message on successful connection

    // Return the database object for the specified database
    return client.db("myDb");
  } catch (error) {
    // Log error details if the connection fails
    console.error("Connection error", error);

    // Throw an error with a descriptive message
    throw new Error("Database connection failed");
  }
}

// Export the connectToDB function for use in other modules
module.exports = { connectToDB };
