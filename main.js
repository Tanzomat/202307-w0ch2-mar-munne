const startButtonElement = document.querySelector(".startButton");
const userMessage = document.querySelector(".user-message");
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

const checkGuessResult = (
  firstRandomCardValue,
  secondRandomCardValue,
  guess
) => {
  if (firstRandomCardValue === secondRandomCardValue)
    return "You tied, better luck next time! :(";
  if (
    (firstRandomCardValue > secondRandomCardValue && guess === "lower") ||
    (firstRandomCardValue < secondRandomCardValue && guess === "higher")
  )
    return "Congrats! You won :)";
  return "Sorry, try again! :(";
};

const playHigherOrLowerGame = (guess) => {
  higherButtonElement.disabled = true;
  lowerButtonElement.disabled = true;

  const firstRandomCard = {
    cardValue: localStorage.getItem("firstCardValue"),
    cardSuit: localStorage.getItem("firstCardSuit"),
  };
  const secondRandomCard = {
    cardValue: localStorage.getItem("secondCardValue"),
    cardSuit: localStorage.getItem("secondCardSuit"),
  };

  console.log({ firstRandomCard, secondRandomCard });

  console.log(
    `The randomly generated card is: ${firstRandomCard.cardValue} of ${firstRandomCard.cardSuit}`
  );

  const toBeGuessedCardDisplay = document.querySelector(".toBeGuessedCard");
  toBeGuessedCardDisplay.textContent = `${secondRandomCard.cardValue}${secondRandomCard.cardSuit}`;

  const resultMessage = checkGuessResult(
    firstRandomCard.cardValue,
    secondRandomCard.cardValue,
    guess
  );

  userMessage.textContent = resultMessage;
};

const displayFirstCard = () => {
  const [firstRandomCard, secondRandomCard] = getRandomCards();

  console.log(
    `The randomly generated card is: ${firstRandomCard.cardValue} of ${firstRandomCard.cardSuit}`
  );

  userMessage.textContent = "Will the next card be higher or lower?";

  const givenCardDisplay = document.querySelector(".givenCard");
  givenCardDisplay.textContent = `${firstRandomCard.cardValue}${firstRandomCard.cardSuit}`;

  const toBeGuessedCardDisplay = document.querySelector(".toBeGuessedCard");
  toBeGuessedCardDisplay.textContent = `?`;

  localStorage.setItem("firstCardValue", firstRandomCard.cardValue);
  localStorage.setItem("firstCardSuit", firstRandomCard.cardSuit);
  localStorage.setItem("secondCardValue", secondRandomCard.cardValue);
  localStorage.setItem("secondCardSuit", secondRandomCard.cardSuit);
  higherButtonElement.disabled = false;
  lowerButtonElement.disabled = false;
};

const handleGuessButtons = async (guess) => {
  playHigherOrLowerGame(guess);
  setTimeout(displayFirstCard, "2000");
};

startButtonElement.addEventListener("click", () => {
  displayFirstCard();
  startButtonElement.classList.add("hidden");
  userMessage.classList.remove("hidden");
  welcomeScreenElements.classList.add("hidden");
  playingScreenElements.classList.remove("hidden");
});

higherButtonElement.addEventListener("click", () =>
  handleGuessButtons("higher")
);

lowerButtonElement.addEventListener("click", () => handleGuessButtons("lower"));
