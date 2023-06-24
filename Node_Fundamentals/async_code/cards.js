$(function() {
  let BASE_URL = 'https://deckofcardsapi.com/api/deck';

  // 1.
  $.getJSON(`${BASE_URL}/new/draw/`, function(data) {
    let { suit, value } = data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  });

  // 2.
  $.getJSON(`${BASE_URL}/new/draw/`, function(data) {
    let firstCard = data.cards[0];
    let deckId = data.deck_id;
    $.getJSON(`${BASE_URL}/${deckId}/draw/`, function(data) {
      let secondCard = data.cards[0];
      [firstCard, secondCard].forEach(function(card) {
        console.log(
          `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
        );
      });
    });
  });

  // 3.
  let deckId = null;
  let $button = $('button');
  let $cardArea = $('#card-area');

  $.getJSON(`${BASE_URL}/new/shuffle/`, function(data) {
    deckId = data.deck_id;
    $button.show();
  });

  $button.on('click', function() {
    $.getJSON(`${BASE_URL}/${deckId}/draw/`, function(data) {
      let cardSrc = data.cards[0].image;
      let angle = Math.random() * 90 - 45;
      let randomX = Math.random() * 40 - 20;
      let randomY = Math.random() * 40 - 20;
      $cardArea.append(
        $('<img>', {
          src: cardSrc,
          css: {
            transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
          }
        })
      );
      if (data.remaining === 0) $button.remove();
    });
  });
});