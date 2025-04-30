package entities;

///Clase Card:
public class Card {
	//Atributos:
	private int idCard;
	private int number;
	private float balance;
	private boolean activated;
	private User user;
	
	//Constructor:
	public Card(int idCard, int number, float balance, boolean activated, User user) {
		this.idCard = idCard;
		this.number = number;
		this.balance = balance;
		this.activated = activated;
		this.user = user;
	}

	//Getters:
	public int getIdCard() {
		return idCard;
	}

	public int getNumber() {
		return number;
	}

	public float getBalance() {
		return balance;
	}

	public boolean isActivated() {
		return activated;
	}
	
	public User getUser() {
		return user;
	}

	//Setters:
	public void setIdCard(int idCard) {
		this.idCard = idCard;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public void setBalance(float balance) {
		this.balance = balance;
	}

	public void setActivated(boolean activated) {
		this.activated = activated;
	}
	
	public void setUser(User user) {
		this.user = user;
	}

	//To String:
	@Override
	public String toString() {
		return "Card [idCard=" + idCard + ", number=" + number + ", balance=" + balance + ", activated=" + activated + ", user="
				+ user + "]";
	}
}
