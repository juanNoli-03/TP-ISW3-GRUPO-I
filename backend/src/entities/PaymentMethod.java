package entities;

///Clase PaymentMethod:
public class PaymentMethod {
	//Atributos:
	private int idPaymentMethod;
	private String type;
	private boolean activated;
	private String data;
	
	//Constructor:
	public PaymentMethod(int idPaymentMethod, String type, boolean activated, String data) {
		this.idPaymentMethod = idPaymentMethod;
		this.type = type;
		this.activated = activated;
		this.data = data;
	}
	
	//Getters:
	public int getIdPaymentMethod() {
		return idPaymentMethod;
	}
	
	public String getType() {
		return type;
	}
	
	public boolean isActivated() {
		return activated;
	}
	
	public String getData() {
		return data;
	}
	
	//Setters:
	public void setIdPaymentMethod(int idPaymentMethod) {
		this.idPaymentMethod = idPaymentMethod;
	}
	
	public void setType(String type) {
		this.type = type;
	}
	
	public void setActivated(boolean activated) {
		this.activated = activated;
	}
	
	public void setData(String data) {
		this.data = data;
	}
	
	//To String:
	@Override
	public String toString() {
		return "PaymentMethod [idPaymentMethod=" + idPaymentMethod + ", type=" + type + ", activated=" + activated
				+ ", data=" + data + "]";
	}
}
