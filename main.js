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

const getRandomCards = () => {
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

  return [drawRandomCard(deck), drawRandomCard(deck)];
};

const playHigherOrLowerGame = () => {
  const [firstRandomCard, secondRandomCard] = getRandomCards();

  console.log(
    `The randomly generated card is: ${firstRandomCard.cardValue} of ${firstRandomCard.cardSuit}`
  );

  const givenCardDisplay = document.querySelector(".givenCard");
  givenCardDisplay.textContent = `${firstRandomCard.cardValue}${firstRandomCard.cardSuit}`;

  const toBeGuessedCardDisplay = document.querySelector(".toBeGuessedCard");
  toBeGuessedCardDisplay.textContent = `${secondRandomCard.cardValue}${secondRandomCard.cardSuit}`;
};

const displayFirstCard = () => {
  const [firstRandomCard] = getRandomCards();

  console.log(
    `The randomly generated card is: ${firstRandomCard.cardValue} of ${firstRandomCard.cardSuit}`
  );

  const givenCardDisplay = document.querySelector(".givenCard");
  givenCardDisplay.textContent = `${firstRandomCard.cardValue}${firstRandomCard.cardSuit}`;

  const toBeGuessedCardDisplay = document.querySelector(".toBeGuessedCard");
  toBeGuessedCardDisplay.textContent = `?`;
};

startButtonElement.addEventListener("click", () => {
  displayFirstCard();
  startButtonElement.classList.add("hidden");
  isNextCardHigherOrLowerElement.classList.remove("hidden");
  welcomeScreenElements.classList.add("hidden");
  playingScreenElements.classList.remove("hidden");
});

higherButtonElement.addEventListener("click", playHigherOrLowerGame);

lowerButtonElement.addEventListener("click", playHigherOrLowerGame);
