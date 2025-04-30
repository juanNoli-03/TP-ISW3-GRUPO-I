package repositories;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import datos.Transaction;

///Interface ITransactionRepository:
public interface ITransactionRepository {
	///Encontrar:
	
	//Encontramos la transacción con determinado id:
	public abstract Transaction findByIdTransaction(int idTransaction);
	
	//Encontramos las transacciones en determinada fecha:
	public abstract List<Transaction> findByDate(LocalDate date);
	
	//Encontramos las transacciones en determinada fecha o anteriores a ella:
	public abstract List<Transaction> findByDateBeforeThanOrEqualTo(LocalDate date);
	
	//Encontramos las transacciones en determinada fecha o posteriores a ella:
	public abstract List<Transaction> findByDateAfterThanOrEqualTo(LocalDate date);
	
	//Encontramos las transacciones con una fecha en un rango determinado (extremos incluidos):
	public abstract List<Transaction> findByDateRange(LocalDate fromDate, LocalDate untilDate);
	
	//Encontramos las transacciones en determinada hora:
	public abstract List<Transaction> findByTime(LocalTime time);
	
	//Encontramos las transacciones en determinada hora o anteriores a ella:
	public abstract List<Transaction> findByTimeBeforeThanOrEqualTo(LocalTime time);
	
	//Encontramos las transacciones en determinada hora o posteriores a ella:
	public abstract List<Transaction> findByTimeAfterThanOrEqualTo(LocalTime time);
	
	//Encontramos las transacciones con una hora en un rango determinado (extremos incluidos):
	public abstract List<Transaction> findByTimeRange(LocalTime fromTime, LocalTime untilTime);
	
	//Encontramos las transacciones en determinada fecha y hora:
	public abstract List<Transaction> findByDateAndTime(LocalDate date, LocalTime time);
	
	//Encontramos las transacciones de determinado tipo:
	public abstract List<Transaction> findByType(String type);
	
	//Encontramos las transacciones con un precio menor o igual a uno determinado:
	public abstract List<Transaction> findByPriceLessThanOrEqualTo(float price);
	
	//Encontramos las transacciones con un precio mayor o igual a uno determinado:
	public abstract List<Transaction> findByPriceGreaterThanOrEqualTo(float price);
	
	//Encontramos las transacciones con un precio en un rango determinado (extremos incluidos):
	public abstract List<Transaction> findByPriceRange(float minimumPrice, float maximumPrice);
	
	//Encontramos las transacciones de determinada tarjeta:
	public abstract List<Transaction> findByCard(int idCard);
	
	///Obtener:
	
	//Obtenemos todas las transacciones:
	public abstract List<Transaction> getAll();
	
	///Ordenar:
	
	//Obtenemos todas las transacciones ordenadas por fecha de forma ascendente:
	public abstract List<Transaction> getAllInOrderAscByDate();
	
	//Obtenemos todas las transacciones ordenadas por fecha de forma descendente:
	public abstract List<Transaction> getAllInOrderDescByDate();
	
	//Obtenemos todas las transacciones ordenadas por hora de forma ascendente:
	public abstract List<Transaction> getAllInOrderAscByTime();
	
	//Obtenemos todas las transacciones ordenadas por hora de forma descendente:
	public abstract List<Transaction> getAllInOrderDescByTime();
	
	//Obtenemos todas las transacciones ordenadas por precio de forma ascendente:
	public abstract List<Transaction> getAllInOrderAscByPrice();
	
	//Obtenemos todas las transacciones ordenadas por precio de forma descendente:
	public abstract List<Transaction> getAllInOrderDescByPrice();
}
