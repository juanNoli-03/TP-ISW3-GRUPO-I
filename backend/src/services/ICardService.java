package services;

import java.util.List;

import entities.Card;

///Interface ICardService:
public interface ICardService {
	///Encontrar:
	
	//Encontramos la tarjeta con determinado id:
	public Card findByIdCard(int idCard);
	
	//Encontramos la tarjeta con determinado número:
	public Card findByNumber(int number);
	
	//Encontramos la tarjeta con determinado usuario:
	public Card findByUser(int idUser);
	
	//Encontramos las tarjetas en determinado estado:
	public List<Card> findByActivated(boolean activated);
	
	//Encontramos las tarjetas con un saldo menor o igual a uno determinado:
	public List<Card> findByBalanceLessThanOrEqualTo(float balance);
	
	//Encontramos las tarjetas con un saldo mayor o igual a uno determinado:
	public List<Card> findByBalanceGreaterThanOrEqualTo(float balance);
	
	//Encontramos las tarjetas con un saldo en un rango determinado (extremos incluidos):
	public List<Card> findByBalanceRange(float minimumBalance, float maximumBalance);
	
	///Obtener:
	
	//Obtenemos todas las tarjetas:
	public List<Card> getAll();
	
	///Ordenar:
	
	//Obtenemos todas las tajetas ordenadas por número de forma ascendente:
	public List<Card> getAllInOrderAscByNumber();
	
	//Obtenemos todas las tajetas ordenadas por número de forma descendente:
	public List<Card> getAllInOrderDescByNumber();
	
	///Agregar:
	
	//Agregamos una tarjeta:
	public Card insert(Card card) throws Exception;
	
	///Modificar:
	
	//Modificamos una tarjeta:
	public Card update(Card card) throws Exception;
	
	///Eliminar:
	
	//Eliminamos lógicamente una tarjeta:
	public boolean removeLogical(int idCard);
	
	//Eliminamos físicamente una tarjeta:
	public boolean remove(int idCard);
}
