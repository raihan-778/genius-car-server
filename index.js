const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

//middlewares
// this is for cross platform permissions
app.use(cors());

//this is auto convertion to json file when post method is applied.
app.use(express.json());

console.log(process.env.DB_USER);
console.log(process.env.SECREAT_KEY);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.SECREAT_KEY}@cluster0.jz1qjld.mongodb.net/?retryWrites=true&w=majority`;

console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.get("/", (req, res) => {
  res.send("genius car server is running");
});
app.listen(port, () => {
  console.log(`genius car server is running on port ${port}`);
});
