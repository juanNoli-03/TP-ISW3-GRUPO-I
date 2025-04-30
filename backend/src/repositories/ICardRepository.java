package repositories;

import java.util.List;

import entities.Card;

///Interface ICardRepository:
public interface ICardRepository {
	///Encontrar:
	
	//Encontramos la tarjeta con determinado id:
	public abstract Card findByIdCard(int idCard);
	
	//Encontramos la tarjeta con determinado número:
	public abstract Card findByNumber(int number);
	
	//Encontramos la tarjeta con determinado usuario:
	public abstract Card findByUser(int idUser);
	
	//Encontramos las tarjetas en determinado estado:
	public abstract List<Card> findByActivated(boolean activated);
	
	//Encontramos las tarjetas con un saldo menor o igual a uno determinado:
	public abstract List<Card> findByBalanceLessThanOrEqualTo(float balance);
	
	//Encontramos las tarjetas con un saldo mayor o igual a uno determinado:
	public abstract List<Card> findByBalanceGreaterThanOrEqualTo(float balance);
	
	//Encontramos las tarjetas con un saldo en un rango determinado (extremos incluidos):
	public abstract List<Card> findByBalanceRange(float minimumBalance, float maximumBalance);
	
	///Obtener:
	
	//Obtenemos todas las tarjetas:
	public abstract List<Card> getAll();
	
	///Ordenar:
	
	//Obtenemos todas las tajetas ordenadas por número de forma ascendente:
	public abstract List<Card> getAllInOrderAscByNumber();
	
	//Obtenemos todas las tajetas ordenadas por número de forma descendente:
	public abstract List<Card> getAllInOrderDescByNumber();
}
