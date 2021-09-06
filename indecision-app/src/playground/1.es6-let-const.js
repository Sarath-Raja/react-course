var nameVar = "Andrew";
var nameVar = "Mike"; // Re-defined
nameVar = "John"; // Re-assinging
console.log("nameVar: ", nameVar)

let nameLet = "Andrew";
// Re-defining is not possible for let variables
nameLet = "Mike"; // Re-assigning
console.log("nameLet: ", nameLet)

const nameConst = "Andrew";
// Both Re-defining & Re-assinging are not possible for const variables
console.log("nameConst", nameConst)

// Block scoping
// Unlike var, both let and const are bound to block scoping like for loops and if statments
const fullName = "Andrew Mead";
let firstName;
if(fullName)
{
    firstName = fullName.split(' ')[0];
}
console.log(firstName)