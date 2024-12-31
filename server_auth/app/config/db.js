const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error(error.message);y
    
    process.exit(1);
  }
};

module.exports = connectDB;

// 'use strict';
// require('dotenv').config();

// const MongoClient = require('mongodb').MongoClient;
// const uri = process.env.MONGO_URI;

// async function main(callback) {

//   //  Now creating a new MongoClient here and everything works great
//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
//   try {
//     await client.connect();
//     await callback(client);
//   } catch (err) {
//     throw new Error('Unable to Connect to Database')
//   } finally {
//     await client.close();
//   };

// }

// module.exports = main;