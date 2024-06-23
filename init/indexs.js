const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../Models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DS");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
 initData.data =  initData.data.map((obj) => ({...obj, owner:"6660254c4c59b7f80eaca694"}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();