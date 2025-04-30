package controllers;

import java.util.List;

import entities.PaymentMethod;
import services.IPaymentMethodService;

///Clase PaymentMethodController:
public class PaymentMethodController {
	//Atributo:
	private IPaymentMethodService paymentMethodService;
	
	//Constructor:
	public PaymentMethodController(IPaymentMethodService paymentMethodService) {
		this.paymentMethodService = paymentMethodService;
	}
	
	//Vista con todos los métodos de pago:
	public String paymentMethods() {
		List<PaymentMethod> paymentMethods = paymentMethodService.getAll();
		return paymentMethods.toString();
	}
	
	//Solicitud de agregar un método de pago:
	public String add(PaymentMethod paymentMethod) {
		PaymentMethod newPaymentMethod = null;
		String view = "payment method not added";
		
		try {
			newPaymentMethod = paymentMethodService.insert(paymentMethod);
			view = newPaymentMethod.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return view;
	}
	
	//Solicitud de modificar un método de pago:
	public String modify(PaymentMethod paymentMethod) {
		PaymentMethod newPaymentMethod = null;
		String view = "payment method not modified";
		
		try {
			newPaymentMethod = paymentMethodService.update(paymentMethod);
			view = newPaymentMethod.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return view;
	}
	
	//Solicitud de desactivar un método de pago:
	public String desactivate(int idPaymentMethod) {
		String view = "payment method desactivated";
		
		try {
			boolean desactivated = paymentMethodService.removeLogical(idPaymentMethod);
			if(desactivated) view = "payment method desactivated";
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return view;
	}
	
	//Solicitud de eliminar un método de pago:
	public String delete(int idPaymentMethod) {
		String view = "payment method not deleted";
				
		try {
			boolean deleted = paymentMethodService.remove(idPaymentMethod);
			if(deleted) view = "payment method deleted";
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return view;
	}
}
