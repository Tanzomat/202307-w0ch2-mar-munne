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

  console.log(
    `The randomly generated card is: ${randomCard.cardValue} of ${randomCard.cardSuit}`
  );

  const givenCardDisplay = document.querySelector(".givenCard");
  givenCardDisplay.innerHTML = `${randomCard.cardValue}${randomCard.cardSuit}`;

  return randomCard;
};

const startButtonElement = document.querySelector(".startButton");
const higherButtonElement = document.querySelector(".higherButton");
const lowerButtonElement = document.querySelector(".lowerButton");
const givenCardElement = document.querySelector(".givenCard");
const toBeGuessedCardElement = document.querySelector(".toBeGuessedCard");
const cardContainerElement = document.querySelector(".card-container");
const isNextCardHigherOrLowerElement = document.querySelector(".next-question");

startButtonElement.addEventListener("click", playHand);

startButtonElement.addEventListener("click", () => {
  startButtonElement.classList.add("hidden");
});

startButtonElement.addEventListener("click", () => {
  higherButtonElement.classList.remove("hidden");
  lowerButtonElement.classList.remove("hidden");
});

startButtonElement.addEventListener("click", () => {
  givenCardElement.classList.remove("hidden");
  toBeGuessedCardElement.classList.remove("hidden");
});

startButtonElement.addEventListener("click", () => {
  cardContainerElement.classList.remove("hidden");
});

startButtonElement.addEventListener("click", () => {
  isNextCardHigherOrLowerElement.classList.remove("hidden");
});

higherButtonElement.addEventListener("click", playHand);

lowerButtonElement.addEventListener("click", playHand);
