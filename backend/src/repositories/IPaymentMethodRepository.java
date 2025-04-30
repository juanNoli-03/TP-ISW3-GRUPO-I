package repositories;

import java.util.List;

import entities.PaymentMethod;

///Interface IPaymentMethodRepository:
public interface IPaymentMethodRepository {
	///Encontrar:
	
	//Encontramos el método de pago con determinado id:
	public abstract PaymentMethod findByIdPaymentMethod(int idPaymentMethod);
	
	//Encontramos los métodos de pago de determinado tipo:
	public abstract List<PaymentMethod> findByType(String type);
	
	//Encontramos los métodos de pago en determinado estado:
	public abstract List<PaymentMethod> findByActivated(boolean activated);
	
	///Obtener:
	
	//Obtenemos todos los métodos de pago:
	public abstract List<PaymentMethod> getAll();
	
	///Ordenar:
	
	//Obtenemos todos los métodos de pago ordenados por id de forma ascendente:
	public abstract List<PaymentMethod> getAllInOrderAscByIdPaymentMethod();
	
	//Obtenemos todos los métodos de pago ordenados por id de forma descendente:
	public abstract List<PaymentMethod> getAllInOrderDescByIdPaymentMethod();
}
