let BASE_URL = "http://numbersapi.com";
let favNumber = 13;

// 1.
$.getJSON(`${BASE_URL}/${favNumber}?json`, function(data) {
  console.log(data);
});

// 2.
let favNumbers = [3, 13, 39];
$.getJSON(`${BASE_URL}/${favNumbers}?json`, function(data) {
  console.log(data);
});

// 3.
let facts = [];
$.getJSON(`${BASE_URL}/${favNumber}?json`, function(data) {
  facts.push(data.text);
  $.getJSON(`${BASE_URL}/${favNumber}?json`, function(data) {
    facts.push(data.text);
    $.getJSON(`${BASE_URL}/${favNumber}?json`, function(data) {
      facts.push(data.text);
      $.getJSON(`${BASE_URL}/${favNumber}?json`, function(data) {
        facts.push(data.text);
        facts.forEach(fact => {
          $("body").append(`<p>${fact}</p>`);
        });
      });
    });
  });
});
