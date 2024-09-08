//Permets de connecter mon projet à MongoDB avec mes identfiants 
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const password = process.env.DB_PASSWORD;//Grâce à dotenv
const username = process.env.DB_USER;
const uri = `mongodb+srv://${username}:${password}@cluster0.bbuwmdq.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => console.log("Connected to Mongo!"))
  .catch((err) => console.error("Error connecting to Mongo", err));

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);

module.exports = { mongoose, User };
