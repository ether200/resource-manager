const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log(`MONGO DB CONNECTED: ${connection.connection.host} `);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

module.exports = connectDatabase;
