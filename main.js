/* El objetivo del juego es adivinar si la siguiente carta en el mazo es mayor o menor que la carta actual. Se utiliza un mazo de cartas francesas que consta de 52 cartas.

Las cartas están divididas en 4 palos: ♠️ (picas), ♣️ (tréboles), ♦️ (diamantes) y ♥️ (corazones).

Cada palo tiene 13 cartas con los siguientes valores: 2, 3, 4, 5, 6, 7, 8, 9, 10, J (jota), Q (reina), K (rey) y A (as).

Para este challenge tendrás que programar las siguientes funcionalidades o _features_:

- Generación de cartas: Crea una función que cree la baraja. Las cartas se generan combinando los valores y palos disponibles en el mazo de cartas francesas.

- Obtención de una carta aleatoria: Implementa una función para obtener una carta aleatoria del array de cartas generado previamente. La carta no tiene que eliminarse del mazo.

- Partida: Implementa una función que reúna todos los pasos de la partida, que por ahora sólo son dos:
  - Crear la baraja
  - Obtener una carta aleatoria e imprimirla por consola

Nota: ninguna de las funciones debe usar una variable externa a ella misma (salvo para invocar a otras funciones). */

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

const createCardDeck = (cardSuits, cardValues) => {
  let deck = new Array();

  for (let i = 0; i < cardSuits.length; i++) {
    for (let j = 0; j < cardValues.length; j++) {
      let card = { cardValue: cardValues[j], cardSuit: cardSuits[i] };

      deck.push(card);
    }
  }
  return deck;
};

createCardDeck(cardSuits, cardValues);

const drawRandomCard = () => {
  const cards = createCardDeck();

  const randomNumber = Math.floor(Math.random() * cards.length);

  const randomCard = cards[randomNumber];

  return console.log(randomCard);
};

drawRandomCard();
