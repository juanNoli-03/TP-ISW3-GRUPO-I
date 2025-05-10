package test;

import entities.Card;

///Clase CardTest:
public class CardTest
{
	public static void main(String[] args)
	{
		//Datos para la prueba:
		Card card1 = new Card(1, 1, 27500, true, null);
		Card card2 = new Card(2, 2, 3200, false, null);
		Card card3 = new Card(3, 3, 16400, true, null);
		
		//Test 1: impresión de los datos de cada tarjeta.
		System.out.println("\n/--------------------------------------- Test 1 ---------------------------------------/\n");
		System.out.println(card1);
		System.out.println(card2);
		System.out.println(card3);
		System.out.println("\n/--------------------------------------------------------------------------------------/\n");
		
		//Test 2: getters.
		System.out.println("\n/--------------------------------------- Test 2 ---------------------------------------/\n");
		System.out.println("ID: " + card1.getIdCard());
		System.out.println("Number: " + card1.getNumber());		
		System.out.println("Balance: $" + card1.getBalance());
		System.out.println("Activated: " + card1.isActivated());
		System.out.println("User: " + card1.getUser());
		System.out.println("\n/--------------------------------------------------------------------------------------/\n");
		
		//Test 3: setters.
		System.out.println("\n/--------------------------------------- Test 3 ---------------------------------------/\n");
		System.out.println(card2);
		card2.setIdCard(10);
		card2.setNumber(10);
		card2.setBalance(20000);
		card2.setActivated(true);
		card2.setUser(null);
		System.out.println(card2);
		System.out.println("\n/--------------------------------------------------------------------------------------/\n");
	}
}
