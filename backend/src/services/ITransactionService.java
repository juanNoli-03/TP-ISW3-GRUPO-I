package services;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import entities.Transaction;

///Interface ITransactionService:
public interface ITransactionService {
	///Encontrar:
	
	//Encontramos la transacción con determinado id:
	public Transaction findByIdTransaction(int idTransaction);
	
	//Encontramos las transacciones en determinada fecha:
	public List<Transaction> findByDate(LocalDate date);
	
	//Encontramos las transacciones en determinada fecha o anteriores a ella:
	public List<Transaction> findByDateBeforeThanOrEqualTo(LocalDate date);
	
	//Encontramos las transacciones en determinada fecha o posteriores a ella:
	public List<Transaction> findByDateAfterThanOrEqualTo(LocalDate date);
	
	//Encontramos las transacciones con una fecha en un rango determinado (extremos incluidos):
	public List<Transaction> findByDateRange(LocalDate fromDate, LocalDate untilDate);
	
	//Encontramos las transacciones en determinada hora:
	public List<Transaction> findByTime(LocalTime time);
	
	//Encontramos las transacciones en determinada hora o anteriores a ella:
	public List<Transaction> findByTimeBeforeThanOrEqualTo(LocalTime time);
	
	//Encontramos las transacciones en determinada hora o posteriores a ella:
	public List<Transaction> findByTimeAfterThanOrEqualTo(LocalTime time);
	
	//Encontramos las transacciones con una hora en un rango determinado (extremos incluidos):
	public List<Transaction> findByTimeRange(LocalTime fromTime, LocalTime untilTime);
	
	//Encontramos las transacciones en determinada fecha y hora:
	public List<Transaction> findByDateAndTime(LocalDate date, LocalTime time);
	
	//Encontramos las transacciones de determinado tipo:
	public List<Transaction> findByType(String type);
	
	//Encontramos las transacciones con un precio menor o igual a uno determinado:
	public List<Transaction> findByPriceLessThanOrEqualTo(float price);
	
	//Encontramos las transacciones con un precio mayor o igual a uno determinado:
	public List<Transaction> findByPriceGreaterThanOrEqualTo(float price);
	
	//Encontramos las transacciones con un precio en un rango determinado (extremos incluidos):
	public List<Transaction> findByPriceRange(float minimumPrice, float maximumPrice);
	
	//Encontramos las transacciones de determinada tarjeta:
	public List<Transaction> findByCard(int idCard);
	
	///Obtener:
	
	//Obtenemos todas las transacciones:
	public List<Transaction> getAll();
	
	///Ordenar:
	
	//Obtenemos todas las transacciones ordenadas por fecha de forma ascendente:
	public List<Transaction> getAllInOrderAscByDate();
	
	//Obtenemos todas las transacciones ordenadas por fecha de forma descendente:
	public List<Transaction> getAllInOrderDescByDate();
	
	//Obtenemos todas las transacciones ordenadas por hora de forma ascendente:
	public List<Transaction> getAllInOrderAscByTime();
	
	//Obtenemos todas las transacciones ordenadas por hora de forma descendente:
	public List<Transaction> getAllInOrderDescByTime();
	
	//Obtenemos todas las transacciones ordenadas por precio de forma ascendente:
	public List<Transaction> getAllInOrderAscByPrice();
	
	//Obtenemos todas las transacciones ordenadas por precio de forma descendente:
	public List<Transaction> getAllInOrderDescByPrice();
	
	///Agregar:
	
	//Agregamos una transacción:
	public Transaction insert(Transaction transaction) throws Exception;
	
	///Modificar:
	
	//Modificamos una transacción:
	public Transaction update(Transaction transaction) throws Exception;
	
	///Eliminar:
	
	//Eliminamos físicamente una transacción:
	public boolean remove(int idTransaction);
}
