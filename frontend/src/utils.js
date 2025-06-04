import { cards } from "../../frontend/src/data/cards";

export const findCardByIdUser = () => {
    let cardSelected;
    cards.forEach(card => {
      if (card.userId == localStorage.getItem("idUsuario")) {
        cardSelected = card;
      }
    });
    return cardSelected;
  }