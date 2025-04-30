package services.implementation;

import java.util.List;

import entities.Card;
import repositories.ICardRepository;

///Clase CardService:
public class CardService {
	///Atributos:
	private ICardRepository cardRepository;
	
	///Constructor:
	public CardService(ICardRepository cardRepository) 
	{
		this.cardRepository = cardRepository;
	}
	
	///Encontrar:
	
	//Encontramos la tarjeta con determinado id:
	public Card findByIdCard(int idCard) {
		return cardRepository.findByIdCard(idCard);
	}
	
	//Encontramos la tarjeta con determinado número:
	public Card findByNumber(int number) {
		return cardRepository.findByNumber(number);
	}
	
	//Encontramos la tarjeta con determinado usuario:
	public Card findByUser(int idUser) {
		return cardRepository.findByUser(idUser);
	}
	
	//Encontramos las tarjetas en determinado estado:
	public List<Card> findByActivated(boolean activated) {
		return null;
	}
	
	//Encontramos las tarjetas con un saldo menor o igual a uno determinado:
	public List<Card> findByBalanceLessThanOrEqualTo(float balance) {
		return cardRepository.findByBalanceLessThanOrEqualTo(balance);
	}
	
	//Encontramos las tarjetas con un saldo mayor o igual a uno determinado:
	public List<Card> findByBalanceGreaterThanOrEqualTo(float balance) {
		return cardRepository.findByBalanceGreaterThanOrEqualTo(balance);
	}
	
	//Encontramos las tarjetas con un saldo en un rango determinado (extremos incluidos):
	public List<Card> findByBalanceRange(float minimumBalance, float maximumBalance) {
		return cardRepository.findByBalanceRange(minimumBalance, maximumBalance);
	}
	
	///Obtener:
	
	//Obtenemos todas las tarjetas:
	public List<Card> getAll() {
		return cardRepository.getAll();
	}
	
	///Ordenar:
	
	//Obtenemos todas las tajetas ordenadas por número de forma ascendente:
	public List<Card> getAllInOrderAscByNumber() {
		return cardRepository.getAllInOrderAscByNumber();
	}
	
	//Obtenemos todas las tajetas ordenadas por número de forma descendente:
	public List<Card> getAllInOrderDescByNumber() {
		return cardRepository.getAllInOrderDescByNumber();
	}
	
	///Agregar:
	
	//Agregamos una tarjeta:
	public Card insert(Card card) throws Exception {
		return card;
	}
	
	///Modificar:
	
	//Modificamos una tarjeta:
	public Card update(Card card) throws Exception {
		return card;
	}
	
	///Eliminar:
	
	//Eliminamos lógicamente una tarjeta:
	public boolean removeLogical(int idCard) {
		return true;
	}
	
	//Eliminamos físicamente una tarjeta:
	public boolean remove(int idCard) {
		return true;
	}
}
