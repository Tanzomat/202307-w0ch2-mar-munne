const startButtonElement = document.querySelector(".startButton");
const isNextCardHigherOrLowerElement = document.querySelector(".next-question");
const welcomeScreenElements = document.querySelector(".welcomeScreenItems");
const playingScreenElements = document.querySelector(".playingScreenItems");
const higherButtonElement = document.querySelector(".higherButton");
const lowerButtonElement = document.querySelector(".lowerButton");

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

const playHigherOrLowerGame = () => {
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
  const firstRandomCard = drawRandomCard(deck);

  console.log(
    `The randomly generated card is: ${randomCard.cardValue} of ${randomCard.cardSuit}`
  );

  const givenCardDisplay = document.querySelector(".givenCard");
  givenCardDisplay.textContent = `${firstRandomCard.cardValue}${firstRandomCard.cardSuit}`;

  const toBeGuessedCardDisplay = document.querySelector(".toBeGuessedCard");
  toBeGuessedCardDisplay.textContent = `${randomCard.cardValue}${randomCard.cardSuit}`;

  startButtonElement.addEventListener("click", () => {
    startButtonElement.classList.add("hidden");
    isNextCardHigherOrLowerElement.classList.remove("hidden");
    welcomeScreenElements.classList.add("hidden");
    playingScreenElements.classList.remove("hidden");
  });
};

startButtonElement.addEventListener("click", playHigherOrLowerGame);

higherButtonElement.addEventListener("click", playHigherOrLowerGame);

lowerButtonElement.addEventListener("click", playHigherOrLowerGame);
