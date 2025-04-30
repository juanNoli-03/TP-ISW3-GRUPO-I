package controllers;

import java.util.List;

import entities.Card;
import services.ICardService;

///Clase CardController:
public class CardController {
	//Atributo:
	private ICardService cardService;
	
	//Constructor:
	public CardController(ICardService cardService) {
		this.cardService = cardService;
	}
	
	//Vista con todas las tarjetas:
	public String cards() {
		List<Card> cards = cardService.getAll();
		return cards.toString();
	}
	
	//Vista con tarjeta del usuario:
	public String userCard(int idUser) {
		Card userCard = cardService.findByUser(idUser);
		return userCard.toString();
	}
	
	//Solicitud de agregar una tarjeta:
	public String add(Card card) {
		Card newCard = null;
		String view = "card not added";
		
		try {
			newCard = cardService.insert(card);
			view = newCard.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return view;
	}
	
	//Solicitud de modificar una tarjeta:
	public String modify(Card card) {
		Card newCard = null;
		String view = "card not modified";
		
		try {
			newCard = cardService.update(card);
			view = newCard.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return view;
	}
	
	//Solicitud de desactivar una tarjeta:
	public String desactivate(int idCard) {
		String view = "card not desactivated";
		
		try {
			boolean desactivated = cardService.removeLogical(idCard);
			if(desactivated) view = "card desactivated";
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return view;
	}
	
	//Solicitud de eliminar una tarjeta:
	public String delete(int idCard) {
		String view = "card not deleted";
				
		try {
			boolean deleted = cardService.remove(idCard);
			if(deleted) view = "card deleted";
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return view;
	}
}
