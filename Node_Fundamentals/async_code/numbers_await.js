let BASE_URL = "http://numbersapi.com";
let favNumber = 13;

// 1.
async function part1() {
  let data = await $.getJSON(`${BASE_URL}/${favNumber}?json`);
  console.log(data);
}
part1();

// 2.
const favNumbers = [3, 13, 39];
async function part2() {
  let data = await $.getJSON(`${BASE_URL}/${favNumbers}?json`);
  console.log(data);
}
part2();

// 3.
async function part3() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${BASE_URL}/${favNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
part3();