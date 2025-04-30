package services.implementation;

import java.util.List;

import datos.PaymentMethod;
import repositories.IPaymentMethodRepository;

///Clase PaymentMethodService:
public class PaymentMethodService {
	///Atributos:
	private IPaymentMethodRepository paymentMethodRepository;
	
	///Constructor:
	public PaymentMethodService(IPaymentMethodRepository paymentMethodRepository) 
	{
		this.paymentMethodRepository = paymentMethodRepository;
	}
	
	///Encontrar:
	
	//Encontramos el método de pago con determinado id:
	public PaymentMethod findByIdPaymentMethod(int idPaymentMethod) {
		return paymentMethodRepository.findByIdPaymentMethod(idPaymentMethod);
	}
	
	//Encontramos los métodos de pago de determinado tipo:
	public List<PaymentMethod> findByType(String type) {
		return paymentMethodRepository.findByType(type);
	}
	
	//Encontramos los métodos de pago en determinado estado:
	public List<PaymentMethod> findByActivated(boolean activated) {
		return paymentMethodRepository.findByActivated(activated);
	}
	
	///Obtener:
	
	//Obtenemos todos los métodos de pago:
	public List<PaymentMethod> getAll() {
		return paymentMethodRepository.getAll();
	}
	
	///Ordenar:
	
	//Obtenemos todos los métodos de pago ordenados por id de forma ascendente:
	public List<PaymentMethod> getAllInOrderAscByIdPaymentMethod() {
		return paymentMethodRepository.getAllInOrderAscByIdPaymentMethod();
	}
	
	//Obtenemos todos los métodos de pago ordenados por id de forma descendente:
	public List<PaymentMethod> getAllInOrderDescByIdPaymentMethod() {
		return paymentMethodRepository.getAllInOrderDescByIdPaymentMethod();
	}
	
	///Agregar:
	
	//Agregamos un método de pago:
	public PaymentMethod insert(PaymentMethod paymentMethod) throws Exception {
		return paymentMethod;
	}
	
	///Modificar:
	
	//Modificamos un método de pago:
	public PaymentMethod update(PaymentMethod paymentMethod) throws Exception {
		return paymentMethod;
	}
	
	///Eliminar:
	
	//Eliminamos lógicamente un método de pago:
	public boolean removeLogical(int idPaymentMethod) {
		return true;
	}
	
	//Eliminamos físicamente un método de pago:
	public boolean remove(int idPaymentMethod) {
		return true;
	}
}
