package services;

import java.util.List;

import entities.User;

///Interface IUserService:
public interface IUserService {
	///Encontrar:
	
	//Encontramos el usuario con determinado id:
	public User findByIdUser(int idUser);
	
	//Encontramos el usuario con determinado email:
	public User findByEmail(String email);
	
	//Encontramos el usuario con determinado DNI:
	public User findByDni(int dni);
	
	//Encontramos los usuarios con determinado nombre:
	public List<User> findByName(String name);
	
	///Obtener:
	
	//Obtenemos todos los usuarios:
	public List<User> getAll();
	
	///Ordenar:
	
	//Obtenemos todos los usuarios ordenados por nombre de forma ascendente:
	public List<User> getAllInOrderAscByName();
	
	//Obtenemos todos los usuarios ordenados por nombre de forma descendente:
	public List<User> getAllInOrderDescByName();
	
	//Obtenemos todos los usuarios ordenados por email de forma ascendente:
	public List<User> getAllInOrderAscByEmail();
	
	//Obtenemos todos los usuarios ordenados por email de forma descendente:
	public List<User> getAllInOrderDescByEmail();
	
	//Obtenemos todos los usuarios ordenados por DNI de forma ascendente:
	public List<User> getAllInOrderAscByDni();
	
	//Obtenemos todos los usuarios ordenados por DNI de forma descendente:
	public List<User> getAllInOrderDescByDni();
	
	///Agregar:
	
	//Agregamos un usuario:
	public User insert(User user) throws Exception;
	
	///Modificar:
	
	//Modificamos un usuario:
	public User update(User user) throws Exception;
	
	///Eliminar:
	
	//Eliminamos físicamente un usuario:
	public boolean remove(int idUser);
}
