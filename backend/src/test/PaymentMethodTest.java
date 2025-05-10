package test;

import entities.PaymentMethod;

///Clase PaymentMethodTest:
public class PaymentMethodTest
{
	public static void main(String[] args)
	{
		//Datos para la prueba:
		PaymentMethod paymentMethod1 = new PaymentMethod(1, "Debit card", true, "Debit card");
		PaymentMethod paymentMethod2 = new PaymentMethod(2, "QR", false, "QR");
		PaymentMethod paymentMethod3 = new PaymentMethod(3, "SUBE card", true, "SUBE card");
		
		//Test 1: impresión de los datos de cada método de pago.
		System.out.println("\n/--------------------------------------- Test 1 ---------------------------------------/\n");
		System.out.println(paymentMethod1);
		System.out.println(paymentMethod2);
		System.out.println(paymentMethod3);
		System.out.println("\n/--------------------------------------------------------------------------------------/\n");
		
		//Test 2: getters.
		System.out.println("\n/--------------------------------------- Test 2 ---------------------------------------/\n");
		System.out.println("ID: " + paymentMethod1.getIdPaymentMethod());
		System.out.println("Type: " + paymentMethod1.getType());		
		System.out.println("Activated: " + paymentMethod1.isActivated());
		System.out.println("Data: " + paymentMethod1.getData());
		System.out.println("\n/--------------------------------------------------------------------------------------/\n");
		
		//Test 3: setters.
		System.out.println("\n/--------------------------------------- Test 3 ---------------------------------------/\n");
		System.out.println(paymentMethod2);
		paymentMethod2.setIdPaymentMethod(10);
		paymentMethod2.setType("New QR");
		paymentMethod2.setActivated(true);
		paymentMethod2.setData("New QR data");
		System.out.println(paymentMethod2);
		System.out.println("\n/--------------------------------------------------------------------------------------/\n");
	}
}
