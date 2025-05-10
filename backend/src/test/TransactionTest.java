package test;

import java.time.LocalDate;
import java.time.LocalTime;

import entities.Transaction;

///Clase TransactionTest:
public class TransactionTest
{
	public static void main(String[] args)
	{
		//Datos para la prueba:
		Transaction transaction1 = new Transaction(1, LocalDate.of(2025, 4, 23), LocalTime.of(10, 30), "Bus", "Bus ticket", 400, null);
		Transaction transaction2 = new Transaction(1, LocalDate.of(2025, 4, 23), LocalTime.of(11, 30), "Train", "Train ticket", 300, null);
		Transaction transaction3 = new Transaction(1, LocalDate.of(2025, 4, 24), LocalTime.of(12, 30), "Subway", "Subway ticket", 800, null);
		
		//Test 1: impresión de los datos de cada transacción.
		System.out.println("\n/--------------------------------------------------------- Test 1 ---------------------------------------------------------/\n");
		System.out.println(transaction1);
		System.out.println(transaction2);
		System.out.println(transaction3);
		System.out.println("\n/--------------------------------------------------------------------------------------------------------------------------/\n");
		
		//Test 2: getters.
		System.out.println("\n/--------------------------------------------------------- Test 2 ---------------------------------------------------------/\n");
		System.out.println("ID: " + transaction1.getIdTransaction());
		System.out.println("Date: " + transaction1.getDate());		
		System.out.println("Time: " + transaction1.getTime());
		System.out.println("Type: " + transaction1.getType());
		System.out.println("Description: " + transaction1.getDescription());
		System.out.println("Price: $" + transaction1.getPrice());
		System.out.println("Card: " + transaction1.getCard());
		System.out.println("\n/--------------------------------------------------------------------------------------------------------------------------/\n");
		
		//Test 3: setters.
		System.out.println("\n/--------------------------------------------------------- Test 3 ---------------------------------------------------------/\n");
		System.out.println(transaction2);
		transaction2.setIdTransaction(10);
		transaction2.setDate(LocalDate.of(2025, 4, 24));
		transaction2.setTime(LocalTime.of(9, 0));
		transaction2.setType("Bus");
		transaction2.setDescription("Bus ticket");
		transaction2.setPrice(400);
		transaction2.setCard(null);
		System.out.println(transaction2);
		System.out.println("\n/--------------------------------------------------------------------------------------------------------------------------/\n");
	}
}
