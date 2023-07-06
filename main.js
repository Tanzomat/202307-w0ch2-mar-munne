const createCardDeck = (cardSuits, cardValues) => {
  let deck = new Array();

  for (let i = 0; i < cardSuits.length; i++) {
    const cardSuit = cardSuits[i];

    for (let j = 0; j < cardValues.length; j++) {
      const cardValue = cardValues[j];

      deck.push({ cardSuit, cardValue });
    }
  }
  return deck;
};

const drawRandomCard = (deck) => {
  const randomNumber = Math.floor(Math.random() * deck.length);

  const randomCard = deck[randomNumber];

  return randomCard;
};

const playHand = () => {
  const cardSuits = ["♠️", "♣️", "♦️", "♥️"];
  const cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const deck = createCardDeck(cardSuits, cardValues);

  const randomCard = drawRandomCard(deck);

  const givenCardDisplay = document.querySelector(".givenCard");
  const toBeGuessedCardDisplay = document.querySelector(".toBeGuessedCard");

  givenCardDisplay.innerHTML = randomCard;

  console.log(
    `The randomly generated card is: ${randomCard.cardValue} of ${randomCard.cardSuit}`
  );

  return randomCard;
};

const startButtonElement = document.querySelector(".startButton");
const higherButtonElement = document.querySelector(".higherButton");
const lowerButtonElement = document.querySelector(".lowerButton");

startButtonElement.addEventListener("click", playHand);

startButtonElement.addEventListener("click", () => {
  startButtonElement.classList.add("hidden");
});

startButtonElement.addEventListener("click", () => {
  higherButtonElement.classList.remove("hidden");
  lowerButtonElement.classList.remove("hidden");
});

startButtonElement.addEventListener("click", () => {
  givenCardDisplay.classList.remove("hidden");
  toBeGuessedCardDisplay.classList.remove("hidden");
});

.
