/* global use, db */
// MongoDB Playground

// Database I'm Using
use('contact');

// Insert a few documents into the contactList collection.
db.getCollection('contactList').insertMany([
  { 'id': 1, 'last name': 'Ben Lahmer', 'first name': "Fares", 'email': "fares@gmail.com", 'age': 26},
  { 'id': 2, 'last name': 'Kefi', 'first name': "Seif", 'email': "kefi@gmail.com", 'age': 15},
  { 'id': 3, 'last name': 'Fatnassi', 'first name': "Sarra", 'email': "sarra.f@gmail.com", 'age': 40},
  { 'id': 4, 'last name': 'Ben Yahia', 'first name': "Rym", 'age': 4},
  { 'id': 5, 'last name': 'Cherif', 'first name': "Sami", 'age': 3},
]);

// Run a findOne command to view an item based on the ID.
const onePerson = db.getCollection('contactList').findOne(
    { "id" : 1}
);

console.log(onePerson)

// Run a find command to view users that are older than 18.
const legalAge = db.getCollection('contactList').find(
    { "age": {$gt: 18}}
)

console.log(legalAge)



const legalAgeAndAh = db.getCollection('contactList').find({
    $and: [
        { age: { $gt: 18 } },
        {
          $or: [
            { 'first name': { $regex: "ah", $options: "i" } },
            { 'last name': { $regex: "ah", $options: "i" } }
          ]
        }
      ]
})

console.log(legalAgeAndAh)


// Query to update kofi last name
// db.getCollection('contactList').updateOne({
//     { 'first name': 'Kefi' },
//     { $set: { 'last name': 'Anis'}}
// })


// Query to delete users that are younger than 5
db.getCollection('contactList').deleteMany({ age: { $lt: 5 } })

// Query to display all the contacts
const allUsers = db.getCollection('contactList').find({})

console.log(allUsers)
