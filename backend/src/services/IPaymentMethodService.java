package services;

import java.util.List;

import entities.PaymentMethod;

///Interface IPaymentMethodService:
public interface IPaymentMethodService {
	///Encontrar:
	
	//Encontramos el método de pago con determinado id:
	public PaymentMethod findByIdPaymentMethod(int idPaymentMethod);
	
	//Encontramos los métodos de pago de determinado tipo:
	public List<PaymentMethod> findByType(String type);
	
	//Encontramos los métodos de pago en determinado estado:
	public List<PaymentMethod> findByActivated(boolean activated);
	
	///Obtener:
	
	//Obtenemos todos los métodos de pago:
	public List<PaymentMethod> getAll();
	
	///Ordenar:
	
	//Obtenemos todos los métodos de pago ordenados por id de forma ascendente:
	public List<PaymentMethod> getAllInOrderAscByIdPaymentMethod();
	
	//Obtenemos todos los métodos de pago ordenados por id de forma descendente:
	public List<PaymentMethod> getAllInOrderDescByIdPaymentMethod();
	
	///Agregar:
	
	//Agregamos un método de pago:
	public PaymentMethod insert(PaymentMethod paymentMethod) throws Exception;
	
	///Modificar:
	
	//Modificamos un método de pago:
	public PaymentMethod update(PaymentMethod paymentMethod) throws Exception;
	
	///Eliminar:
	
	//Eliminamos lógicamente un método de pago:
	public boolean removeLogical(int idPaymentMethod);
	
	//Eliminamos físicamente un método de pago:
	public boolean remove(int idPaymentMethod);
}
