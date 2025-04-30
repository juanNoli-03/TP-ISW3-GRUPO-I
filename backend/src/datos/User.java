package datos;

import java.util.ArrayList;
import java.util.List;

///Clase User:
public class User {
	//Atributos:
	private int idUser;
	private String name;
	private String email;
	private String password;
	private int dni;
	private List<PaymentMethod> paymentMethods;
	
	//Constructor:
	public User(int idUser, String name, String email, String password, int dni) {
		this.idUser = idUser;
		this.name = name;
		this.email = email;
		this.password = password;
		this.dni = dni;
		this.paymentMethods = new ArrayList<>();
	}

	//Getters:
	public int getIdUser() {
		return idUser;
	}

	public String getName() {
		return name;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public int getDni() {
		return dni;
	}
	
	public List<PaymentMethod> getPaymentMethods(){
		return paymentMethods;
	}
	
	//Setters:
	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setDni(int dni) {
		this.dni = dni;
	}

	//To String:
	@Override
	public String toString() {
		return "User [idUser=" + idUser + ", name=" + name + ", email=" + email + ", password=" + password + ", dni="
				+ dni + "]";
	}
}
