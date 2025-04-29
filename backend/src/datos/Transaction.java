package datos;

import java.time.LocalDate;
import java.time.LocalTime;

///Clase Transaction:
public class Transaction {
	//Atributos:
	private int idTransaction;
	private LocalDate date;
	private LocalTime time;
	private String type;
	private String description;
	private float price;
	private Card card;
	
	//Constructor:
	public Transaction(int idTransaction, LocalDate date, LocalTime time, String type, String description, float price, Card card) {
		this.idTransaction = idTransaction;
		this.date = date;
		this.time = time;
		this.type = type;
		this.description = description;
		this.price = price;
		this.card = card;
	}

	//Getters:
	public int getIdTransaction() {
		return idTransaction;
	}

	public LocalDate getDate() {
		return date;
	}

	public LocalTime getTime() {
		return time;
	}

	public String getType() {
		return type;
	}

	public String getDescription() {
		return description;
	}
	
	public float getPrice() {
		return price;
	}

	public Card getCard() {
		return card;
	}

	//Setters:
	public void setIdTransaction(int idTransaction) {
		this.idTransaction = idTransaction;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	public void setType(String type) {
		this.type = type;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public void setPrice(float price) {
		this.price = price;
	}

	public void setCard(Card card) {
		this.card = card;
	}

	//To String:
	@Override
	public String toString() {
		return "Transaction [idTransaction=" + idTransaction + ", date=" + date + ", time=" + time + ", type=" + type
				+ ", description=" + description + ", price="+ price + ", card=" + card + "]";
	}	
}
