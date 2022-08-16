// Same keys and values
function createInstructor(firstName, lastName){
  return {
    firstName,
    lastName
  }
}

// Computed property names
let favoriteNumber = 42;

const instructor1 = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

// Object methods
var instructor2 = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + "says bye!";
  }
}

// createAnimal
function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}