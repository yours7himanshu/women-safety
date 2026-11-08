// Dependencies
const mongoose = require("mongoose");

// Module scaffolding
const db = {};

// Establish connection with edge discipline
db.connect = async (uri) => {
  if (!uri) throw new Error("MONGO_URI is missing");
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }
  return await mongoose.connect(uri, {
    bufferCommands: false,
    maxPoolSize: 1,
    family: 4
  });
};

// Disconnect helper for request-scoped isolation
db.disconnect = async () => {
  if (mongoose.connection && mongoose.connection.readyState !== 0) {
    try {
      await mongoose.disconnect();
    } catch (err) {
      console.error("Error disconnecting MongoDB:", err);
    }
  }
};

// Export module
module.exports = db;
