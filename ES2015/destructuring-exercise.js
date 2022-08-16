// OD1
const a1 = "Returns 8 and 1846";

// OD2
const a2 = "Returns {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}";

// OD3
const a3 = "1. Your name is Alejandro and you like purple. 2. Your name is Melissa and you like green. 3. Your name is undefined and you like green."

// AD1
const a4 = "Maya, Marisa, Chi; all on their own lines"

// AD2
const a5 = "1. Raindrops on roses 2. whiskers on kittens 3. ['Bright copper kettles', 'warm woolen mittens', Brown paper packages tied up with strings']"

// AD3
const a6 = "[10, 30, 20]";

// ES2015 Version
const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

const { a, b } = obj.numbers

// Array Swap w/ destructuring
[arr[0], arr[1]] = [arr[1], arr[0]]

// raceResults
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})