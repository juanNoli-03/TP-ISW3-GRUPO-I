package controllers;

import java.util.List;

import entities.Transaction;
import services.ITransactionService;

///Clase TransactionController:
public class TransactionController {
	//Atributo:
	private ITransactionService transactionService;
	
	//Constructor:
	public TransactionController(ITransactionService transactionService) {
		this.transactionService = transactionService;
	}
	
	//Vista con todas las transacciones:
	public String transactions() {
		List<Transaction> transactions = transactionService.getAll();
		return transactions.toString();
	}
	
	//Vista con transacciones de una tarjeta:
	public String cardTransactions(int idCard) {
		List<Transaction> cardTransactions = transactionService.findByCard(idCard);
		return cardTransactions.toString();
	}
	
	//Solicitud de agregar una transacción:
	public String add(Transaction transaction) {
		Transaction newTransaction = null;
		String view = "transaction not added";
		
		try {
			newTransaction = transactionService.insert(transaction);
			view = newTransaction.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return view;
	}
	
	//Solicitud de modificar una transacción:
	public String modify(Transaction transaction) {
		Transaction newTransaction = null;
		String view = "transaction not modified";
		
		try {
			newTransaction = transactionService.update(transaction);
			view = newTransaction.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return view;
	}
	
	//Solicitud de eliminar una transacción:
	public String delete(int idTransaction) {
		String view = "transaction not deleted";
				
		try {
			boolean deleted = transactionService.remove(idTransaction);
			if(deleted) view = "transaction deleted";
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return view;
	}
}
