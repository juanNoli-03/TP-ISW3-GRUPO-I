<div id="user-content-toc">
  <ul align="center">
    <summary><h1 style="display: inline-block">Trabajo practico ISW3 - Equipo I - UNLa</summary>
  </ul>
</div>

------------

<div id="user-content-toc">
  <ul align="left">
    <summary><h2 style="display: inline-block">Documentación de los distintos endpoints del sistema :</summary>
    <summary><h3 style="display: inline-block">Link al entregable 1: https://drive.google.com/drive/folders/1XtPhGd6KFVcUrgcVWoVtNsXavWWmOK2S?dmr=1&ec=wgc-drive-globalnav-goto </summary>

  </ul>
</div>

<h3>1- User</h3>

------------

🔵 **GET** -- **`/user`** 
  
Endpoint para obtener los usuarios registrados. El endpoint permite al usuario obtener todos los usuarios presentes en el sistema.

**Consideraciones**:

- Deben existir usuarios registrados.

**Formato de salida**:

- Salida:

   ```json
    [
      {
        "name": "Juan Sanchez",
        "email": "juanSanchez@example.com",
        "dni": "45233126"
      }
    ]

🟢 **POST** -- **`/user`** 
  
Endpoint para agregar a un usuario en el sistema. El endpoint permite al usuario registrarse en el sistema.

**Consideraciones**:

- Los campos deben estar completos, ninguno puede ser nulo.

- El formato del mail debe ser de la siguiente manera: (A-Z)@(A-Z).com

- La contraseña debe tener entre 6 y 20 caracteres.

- El DNI debe ser válido.

**Formato de entrada**:

- Entrada:

  ```json
  {
    "name": "Juan Sanchez",
    "email": "juanSanchez@example.com",
    "password": "123456",
    "dni": "45233126"
  }

🟣 **PATCH** -- **`/user/{idUser}`** 
  
Endpoint para actualizar los datos de un usuario. El endpoint permite al usuario actualizar los datos de un determinado usuario.

**Consideraciones**:

- Los datos modificados deber ser válidos.

**Formato de entrada y salida**:

- Entrada:

  ```json
  {
    "name": "Agustin Lopez",
    "email": "agustinLopez@example.com"
  }

*Junto con el ID del User como párametro*

- Salida:

   ```json
   {
    "name": "Agustin Lopez",
    "email": "agustinLopez@example.com",
    "password": "123456",
    "dni": "45233126"
  }

🔴 **DELETE** -- **`/user`** 
  
Endpoint para darse de baja del sistema.

**Consideraciones**:

- Una vez dado de baja, el usuario no podrá iniciar sesión nuevamente

- Para poder regresar al sistema, debe activar su cuenta nuevamente.

**Formato de salida**:

- Salida:

   ```json
   "User deleted!"
  
------------

<h3>2- Card</h3>

------------

🔵 **GET** -- **`/card`** 
  
Endpoint para obtener las tarjetas de los usuarios presentes en el sistema.

**Consideraciones**:

- Los usuarios deben tener tarjetas presentes en el sistema.

**Formato de salida**:

- Salida:

   ```json
    [
      {
       "number": "2515551140",
       "balance": "1000",
	"activated": "true",
       "idUser": 5
      },
      {
       "number": "6015551140",
	"balance": "-500",
	"activated": "false",
       "idUser": 2
      }
   
    ]

🔵 **GET** -- **`/card/{idUser}`** 
  
Endpoint para obtener las tarjetas presentes en el sistema de un determinado usuario.

**Consideraciones**:

- El usuario debe tener tarjetas presentes en el sistema.

**Formato de salida**:

- Salida:

   ```json
    [
      {
       "number": "2515551140",
       "balance": "1000",
	"activated": "true"
      }
    ]

🟢 **POST** -- **`/card`** 
  
Endpoint para agregar una tarjeta en el sistema.

**Formato de entrada**:

- Entrada:

  ```json
  {
    "number": "2515551140",
    "balance": "0",
    "activated": "true",
    "idUser": 5
  }

🟣 **PATCH** -- **`/card/{idCard}`** 
  
Endpoint para actualizar los datos de una determinada tarjeta. El endpoint permite al usuario actualizar los datos de una determinada tarjeta.

**Consideraciones**:

- Los datos modificados deber ser válidos.

**Formato de entrada y salida**:

- Entrada:

  ```json
  {
    "number": "2515551140",
    "balance": "5000",
    "activated": "true"
  }

*Junto con el ID de la Card como párametro*

- Salida:

   ```json
   {
    "number": "2515551140",
    "balance": "5000",
    "activated": "true"
  }

🟣 **PATCH** -- **`/card/desactivate/{idCard}`** 
  
Endpoint para desactivar una determinada tarjeta. El endpoint permite al usuario desactivar una determinada tarjeta.

**Formato de entrada y salida**:

- Entrada:

  ```json
  {
    "activated": "false"
  }

*Junto con el ID de la Card como párametro*

- Salida:

   ```json
  "Card desactivated!"
   
🔴 **DELETE** -- **`/card/{idCard}`** 
  
Endpoint para dar de baja a una determinada tarjeta del sistema.

**Consideraciones**:

- Una vez dada de baja, la tarjeta no podrá darse de alta nuevamente.

**Formato de salida**:

- Salida:

   ```json
   "Card deleted!"
  
------------

<h3>3- Payment Method</h3>

------------

🔵 **GET** -- **`/paymentMethod`** 
  
Endpoint para obtener los métodos de pago presentes en el sistema.

**Consideraciones**:

- Los usuarios deben tener métodos de pago presentes en el sistema.

**Formato de salida**:

- Salida:

   ```json
    [
      {
       "type": "debit",
	"activated": "true",
       "data": "0156398456"
      },
      {
       "type": "credit",
	"activated": "true",
       "data": "0156784123"
      }
    ]

🟢 **POST** -- **`/paymentMethod`** 
  
Endpoint para agregar un nuevo método de pago al sistema.

**Formato de entrada**:

- Entrada:

  ```json
  {
    "type": "debit",
    "activated": "true",
    "data": "0156398456"
  }

🟣 **PATCH** -- **`/paymentMethod/{idPaymentMethod}`** 
  
Endpoint para actualizar los datos de un método de pago. El endpoint permite al usuario actualizar los datos de un determinado método de pago.

**Consideraciones**:

- Los datos modificados deber ser válidos.

**Formato de entrada y salida**:

- Entrada:

  ```json
  {
    "type": "credit",
  }

*Junto con el ID del Payment Method como párametro*

- Salida:

   ```json
   {
    "type": "credit",
     "activated": "true",
    "data": "0156398456"
  }

🟣 **PATCH** -- **`/paymentMethod/desactivate/{idPaymenthMethod}`** 
  
Endpoint para desactivar un método de pago. El endpoint permite al usuario desactivar un determinado método de pago.

**Formato de entrada y salida**:

- Entrada:

  ```json
  {
     "activated": "false"
  }

*Junto con el ID del Payment Method como párametro*

- Salida:

   ```json
   "Payment Method desactivated!"
   
🔴 **DELETE** -- **`/paymentMethod/{idPaymentMethod}`** 
  
Endpoint para dar de baja a un determinado método de pago del sistema.

**Formato de salida**:

- Salida:

   ```json
   "Payment Method deleted!"

------------

<h3>4- Transaction:</h3>

------------

🔵 **GET** -- **`/transaction`** 
  
Endpoint para obtener todas las transacciones presentes en el sistema.

**Consideraciones**:

- Los usuarios deben tener transacciones presentes en el sistema.

**Formato de salida**:

- Salida:

   ```json
    [
      {
       "date": "2024-10-11",
       "time": "10:29:25",
       "type": "payment",
       "description": "Pago de transporte",
       "price": "500"
      },
      {
       "date": "2024-10-20",
	"time": "10:45:25",
       "type": "Deposito",
       "description": "Deposito para Pago de transporte",
       "price": "5000"
      }
    ]

🔵 **GET** -- **`/transaction/{idCard}`** 
  
Endpoint para obtener todas las transacciones pertenecientes a una determinada tarjeta.

**Consideraciones**:

- La tarjeta debe tener transacciones presentes.

**Formato de salida**:

- Salida:

   ```json
    [
      {
       "date": "2024-10-11",
	"time": "10:29:25",
       "type": "payment",
       "description": "Pago de transporte",
       "price": "500"
      },
      {
       "date": "2024-10-20",
       "time": "10:45:25",
       "type": "Deposito",
       "description": "Deposito para Pago de transporte",
       "price": "5000"
      }
    ]

🟢 **POST** -- **`/transaction`** 
  
Endpoint para generar una nueva transacción.

**Formato de entrada**:

- Entrada:

  ```json
  {
     "date": "2024-10-11",
     "time": "10:29:25",
     "type": "payment",
     "description": "Pago de transporte",
     "price": "500"
  }

🟣 **PATCH** -- **`/transaction/{idTransaction}`** 
  
Endpoint para actualizar los datos de una determinada transacción. El endpoint permite al usuario actualizar los datos de una determinada transacción.

**Consideraciones**:

- Los datos modificados deber ser válidos.

**Formato de entrada y salida**:

- Entrada:

  ```json
  {
    "type": "deposit",
    "description": "Acreditacion de boleto estudiantil",
  }

*Junto con el ID de la transacción como párametro*

- Salida:

   ```json
   {
     "date": "2024-10-11",
     "time": "10:29:25",
     "type": "deposit",
     "description": "Acreditacion de boleto estudiantil",
     "price": "25000"
  }
   
🔴 **DELETE** -- **`/transaction/{idTransaction}`** 
  
Endpoint para dar de baja a una determinada transacción.

**Formato de salida**:

- Salida:

   ```json
   "Transaction deleted!"
