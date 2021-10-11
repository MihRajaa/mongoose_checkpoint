const express = require("express");
const Person = require("./person");
const connectdb = require("./config/connectDB");
require("dotenv").config({ path: "./config/.env" });

const app = express();

connectdb();

// Create and Save a Record of a Model

// const person = new Person({ name: "jhon", age: 15, favoriteFoods: [""] });

// person
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Create Many Records

// const person = [
//   { name: "p1", age: 2, favoriteFoods: ["milk", "sauce"] },
//   { name: "p2", age: 18, favoriteFoods: ["spagetti", "kabab"] },
// ];

// Person.create(person, function (err) {
//   err ? console.log(err) : null;
// });

// Search Your Database

// Person.find({ name: "p1" }, function (err, p) {
//   err ? console.log(err) : console.log(p);
// });

// Return a Single Matching Document from Your Database

// Person.findOne({ favoriteFoods: "spagetti" }, function (err, p) {
//   err ? console.log(err) : console.log(p);
// });

// Search Your Database By _id

// Person.findById("6164663184cb687300579f57", function (err, p) {
//   err ? console.log(err) : console.log(p);
// });

//Perform Classic Updates by Running Find, Edit, then Save

// Person.findById("6164663184cb687300579f57", function (err, data) {
//   if (err) console.log(err);
//   else {
//     data.favoriteFoods.push("hamburger");
//     person = new Person(data);
//     person.save((err, data) => {
//       if (err) console.log(err);
//       else console.log(data);
//     });
//   }
// });

// Perform New Updates on a Document

// Person.findOneAndUpdate(
//   { name: "p2" },
//   { age: 20 },
//   { new: true },
//   function (err, data) {
//     err ? console.log(err) : console.log(data);
//   }
// );

// Delete One Document

// Person.findByIdAndDelete({ _id: "61646a1d89871bf028e517fa" }, (err) => {
//   err ? console.log(err) : console.log("removed");
// });

// Delete Many Documents

// Person.remove({ name: "Mary" }, (err) =>
//   err ? console.log(err) : console.log("removed")
// );

// Chain Search Query Helpers to Narrow Search Results

Person.find({ favoriteFoods: "burritos" })
  .sort({ name: "asc" })
  .limit(2)
  .select({ age: false })
  .exec((err, data) => (err ? console.log(err) : console.log(data)));

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on port ${PORT}`)
);
