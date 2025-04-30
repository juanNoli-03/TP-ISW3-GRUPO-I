package repositories;

import java.util.List;

import datos.User;

///Interface IUserRepository:
public interface IUserRepository {
	///Encontrar:
	
	//Encontramos el usuario con determinado id:
	public abstract User findByIdUser(int idUser);
	
	//Encontramos el usuario con determinado email:
	public abstract User findByEmail(String email);
	
	//Encontramos el usuario con determinado DNI:
	public abstract User findByDni(int dni);
	
	//Encontramos los usuarios con determinado nombre:
	public abstract List<User> findByName(String name);
	
	///Obtener:
	
	//Obtenemos todos los usuarios:
	public abstract List<User> getAll();
	
	///Ordenar:
	
	//Obtenemos todos los usuarios ordenados por nombre de forma ascendente:
	public abstract List<User> getAllInOrderAscByName();
	
	//Obtenemos todos los usuarios ordenados por nombre de forma descendente:
	public abstract List<User> getAllInOrderDescByName();
	
	//Obtenemos todos los usuarios ordenados por email de forma ascendente:
	public abstract List<User> getAllInOrderAscByEmail();
	
	//Obtenemos todos los usuarios ordenados por email de forma descendente:
	public abstract List<User> getAllInOrderDescByEmail();
	
	//Obtenemos todos los usuarios ordenados por DNI de forma ascendente:
	public abstract List<User> getAllInOrderAscByDni();
	
	//Obtenemos todos los usuarios ordenados por DNI de forma descendente:
	public abstract List<User> getAllInOrderDescByDni();
}
