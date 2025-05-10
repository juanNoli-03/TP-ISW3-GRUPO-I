package test;

import entities.User;

///Clase UserTest:
public class UserTest
{
	public static void main(String[] args)
	{
		//Datos para la prueba:
		User user1 = new User(1, "Pedro López", "pedrolopez@gmail.com", "pedrolopez", 11111111);
		User user2 = new User(2, "Macarena González", "macarenagonzalez@gmail.com", "macarenagonzalez", 22222222);
		User user3 = new User(3, "Camilo Méndez", "camilomendez@gmail.com", "camilomendez", 33333333);
		
		//Test 1: impresión de los datos de cada usuario.
		System.out.println("\n/----------------------------------------------------------- Test 1 -----------------------------------------------------------/\n");
		System.out.println(user1);
		System.out.println(user2);
		System.out.println(user3);
		System.out.println("\n/-------------------------------------------------------------------------------------------------------------------/\n");
		
		//Test 2: getters.
		System.out.println("\n/----------------------------------------------------------- Test 2 -----------------------------------------------------------/\n");
		System.out.println("ID: " + user1.getIdUser());
		System.out.println("Name: " + user1.getName());		
		System.out.println("Email: " + user1.getEmail());
		System.out.println("Password: " + user1.getPassword());
		System.out.println("DNI: " + user1.getDni());
		System.out.println("\n/------------------------------------------------------------------------------------------------------------------------------/\n");
		
		//Test 3: setters.
		System.out.println("\n/----------------------------------------------------------- Test 3 -----------------------------------------------------------/\n");
		System.out.println(user2);
		user2.setIdUser(10);
		user2.setName("Ludmila Cáceres");
		user2.setEmail("ludmilacaceres@gmail.com");
		user2.setPassword("ludmilacaceres");
		user2.setDni(44444444);
		System.out.println(user2);
		System.out.println("\n/------------------------------------------------------------------------------------------------------------------------------/\n");
	}
}
