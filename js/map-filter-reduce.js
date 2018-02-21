const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];
const newLanguages = users.filter (type => type.languages.length >=3);
console.log(newLanguages);

// Use .map to create an array of strings where each element is a user's email address

const userEmail = users.map (personalemail => personalemail.email);
console.log(userEmail);

// Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user

const arrayToObject = (users) =>
    users.reduce((obj, item) => {
    obj[item.id] = item;
    return obj
}, {});

console.log(arrayToObject(users));
const userObject = users.reduce((accum, user) => {
  return accum += user.name + " ";

});




const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];
// PROBLEM 1 - create an array of the first letters of each fruit
const newFruits =fruits.map(function (item) {
    return item.substring(0,1);
}).filter(function (value, index, self) {
    // http://stackoverflow.com/a/14438954/1789518
    return self.indexOf(value) === index;
});
console.log(newFruits);
// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)
const newName = customers.map( customer => {
    return {
        name: customer.name,
        age: customer.age
    }
});
console.log(newName);
// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects
const newCustomers = customers.filter(function(customers) {
    return customers.occupation !== "Librarian"
});
console.log(newCustomers);
// PROBLEM 4 - determine the average age of customers

//            PROBLEM 1 HINT - use .map()
//            PROBLEM 2 HINT - use .map()
//            PROBLEM 3 HINT - use .filter()
//            PROBLEM 4 HINT - use .reduce()
