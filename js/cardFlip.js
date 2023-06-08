var cards = document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener('mouseenter', function() {
    if (!card.classList.contains('animationcomplete')) {
      card.classList.add('onhover');
    }

  });
  card.addEventListener('mouseleave', function() {
    if (!card.classList.contains('animationcomplete')) {
      card.classList.remove('onhover');
      card.classList.add('animationcomplete');

    }
  });

});