package services.implementation;

import java.util.List;

import entities.User;
import repositories.IUserRepository;

///Clase UserService:
public class UserService {
	///Atributos:
	private IUserRepository userRepository;
	
	///Constructor:
	public UserService(IUserRepository userRepository) 
	{
		this.userRepository = userRepository;
	}
	
	///Encontrar:
	
	//Encontramos el usuario con determinado id:
	public User findByIdUser(int idUser) {
		return userRepository.findByIdUser(idUser);
	}
	
	//Encontramos el usuario con determinado email:
	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}
	
	//Encontramos el usuario con determinado DNI:
	public User findByDni(int dni) {
		return userRepository.findByDni(dni);
	}
	
	//Encontramos los usuarios con determinado nombre:
	public List<User> findByName(String name) {
		return userRepository.findByName(name);
	}
	
	///Obtener:
	
	//Obtenemos todos los usuarios:
	public List<User> getAll() {
		return userRepository.getAll();
	}
	
	///Ordenar:
	
	//Obtenemos todos los usuarios ordenados por nombre de forma ascendente:
	public List<User> getAllInOrderAscByName() {
		return userRepository.getAllInOrderAscByName();
	}
	
	//Obtenemos todos los usuarios ordenados por nombre de forma descendente:
	public List<User> getAllInOrderDescByName() {
		return userRepository.getAllInOrderDescByName();
	}
	
	//Obtenemos todos los usuarios ordenados por email de forma ascendente:
	public List<User> getAllInOrderAscByEmail() {
		return userRepository.getAllInOrderAscByEmail();
	}
	
	//Obtenemos todos los usuarios ordenados por email de forma descendente:
	public List<User> getAllInOrderDescByEmail() {
		return userRepository.getAllInOrderDescByEmail();
	}
	
	//Obtenemos todos los usuarios ordenados por DNI de forma ascendente:
	public List<User> getAllInOrderAscByDni() {
		return userRepository.getAllInOrderAscByDni();
	}
	
	//Obtenemos todos los usuarios ordenados por DNI de forma descendente:
	public List<User> getAllInOrderDescByDni() {
		return userRepository.getAllInOrderDescByDni();
	}
	
	///Agregar:
	
	//Agregamos un usuario:
	public User insert(User user) throws Exception {
		return user;
	}
	
	///Modificar:
	
	//Modificamos un usuario:
	public User update(User user) throws Exception {
		return user;
	}
	
	///Eliminar:
	
	//Eliminamos físicamente un usuario:
	public boolean remove(int idUser) {
		return true;
	}
}
