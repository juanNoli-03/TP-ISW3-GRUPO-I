package services.implementation;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import entities.Transaction;
import repositories.ITransactionRepository;

///Clase TransactionService:
public class TransactionService {
	///Atributos:
	private ITransactionRepository transactionRepository;
	
	///Constructor:
	public TransactionService(ITransactionRepository transactionRepository) 
	{
		this.transactionRepository = transactionRepository;
	}
	
	///Encontrar:
	
	//Encontramos la transacción con determinado id:
	public Transaction findByIdTransaction(int idTransaction) {
		return transactionRepository.findByIdTransaction(idTransaction);
	}
	
	//Encontramos las transacciones en determinada fecha:
	public List<Transaction> findByDate(LocalDate date) {
		return transactionRepository.findByDate(date);
	}
	
	//Encontramos las transacciones en determinada fecha o anteriores a ella:
	public List<Transaction> findByDateBeforeThanOrEqualTo(LocalDate date) {
		return transactionRepository.findByDateBeforeThanOrEqualTo(date);
	}
	
	//Encontramos las transacciones en determinada fecha o posteriores a ella:
	public List<Transaction> findByDateAfterThanOrEqualTo(LocalDate date) {
		return transactionRepository.findByDateAfterThanOrEqualTo(date);
	}
	
	//Encontramos las transacciones con una fecha en un rango determinado (extremos incluidos):
	public List<Transaction> findByDateRange(LocalDate fromDate, LocalDate untilDate) {
		return transactionRepository.findByDateRange(fromDate, untilDate);
	}
	
	//Encontramos las transacciones en determinada hora:
	public List<Transaction> findByTime(LocalTime time) {
		return transactionRepository.findByTime(time);
	}
	
	//Encontramos las transacciones en determinada hora o anteriores a ella:
	public List<Transaction> findByTimeBeforeThanOrEqualTo(LocalTime time) {
		return transactionRepository.findByTimeBeforeThanOrEqualTo(time);
	}
	
	//Encontramos las transacciones en determinada hora o posteriores a ella:
	public List<Transaction> findByTimeAfterThanOrEqualTo(LocalTime time) {
		return transactionRepository.findByTimeAfterThanOrEqualTo(time);
	}
	
	//Encontramos las transacciones con una hora en un rango determinado (extremos incluidos):
	public List<Transaction> findByTimeRange(LocalTime fromTime, LocalTime untilTime) {
		return transactionRepository.findByTimeRange(fromTime, untilTime);
	}
	
	//Encontramos las transacciones en determinada fecha y hora:
	public List<Transaction> findByDateAndTime(LocalDate date, LocalTime time) {
		return transactionRepository.findByDateAndTime(date, time);
	}
	
	//Encontramos las transacciones de determinado tipo:
	public List<Transaction> findByType(String type) {
		return transactionRepository.findByType(type);
	}
	
	//Encontramos las transacciones con un precio menor o igual a uno determinado:
	public List<Transaction> findByPriceLessThanOrEqualTo(float price) {
		return transactionRepository.findByPriceLessThanOrEqualTo(price);
	}
	
	//Encontramos las transacciones con un precio mayor o igual a uno determinado:
	public List<Transaction> findByPriceGreaterThanOrEqualTo(float price) {
		return transactionRepository.findByPriceGreaterThanOrEqualTo(price);
	}
	
	//Encontramos las transacciones con un precio en un rango determinado (extremos incluidos):
	public List<Transaction> findByPriceRange(float minimumPrice, float maximumPrice) {
		return transactionRepository.findByPriceRange(minimumPrice, maximumPrice);
	}
	
	//Encontramos las transacciones de determinada tarjeta:
	public List<Transaction> findByCard(int idCard) {
		return transactionRepository.findByCard(idCard);
	}
	
	///Obtener:
	
	//Obtenemos todas las transacciones:
	public List<Transaction> getAll() {
		return transactionRepository.getAll();
	}
	
	///Ordenar:
	
	//Obtenemos todas las transacciones ordenadas por fecha de forma ascendente:
	public List<Transaction> getAllInOrderAscByDate() {
		return transactionRepository.getAllInOrderAscByDate();
	}
	
	//Obtenemos todas las transacciones ordenadas por fecha de forma descendente:
	public List<Transaction> getAllInOrderDescByDate() {
		return transactionRepository.getAllInOrderDescByDate();
	}
	
	//Obtenemos todas las transacciones ordenadas por hora de forma ascendente:
	public List<Transaction> getAllInOrderAscByTime() {
		return transactionRepository.getAllInOrderAscByTime();
	}
	
	//Obtenemos todas las transacciones ordenadas por hora de forma descendente:
	public List<Transaction> getAllInOrderDescByTime() {
		return transactionRepository.getAllInOrderDescByTime();
	}
	
	//Obtenemos todas las transacciones ordenadas por precio de forma ascendente:
	public List<Transaction> getAllInOrderAscByPrice() {
		return transactionRepository.getAllInOrderAscByPrice();
	}
	
	//Obtenemos todas las transacciones ordenadas por precio de forma descendente:
	public List<Transaction> getAllInOrderDescByPrice() {
		return transactionRepository.getAllInOrderDescByPrice();
	}
	
	///Agregar:
	
	//Agregamos una transacción:
	public Transaction insert(Transaction transaction) throws Exception {
		return transaction;
	}
	
	///Modificar:
	
	//Modificamos una transacción:
	public Transaction update(Transaction transaction) throws Exception {
		return transaction;
	}
	
	///Eliminar:
	
	//Eliminamos físicamente una transacción:
	public boolean remove(int idTransaction) {
		return true;
	}
}
