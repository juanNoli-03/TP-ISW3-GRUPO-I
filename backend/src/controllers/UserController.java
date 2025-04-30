package controllers;

import java.util.List;

import entities.User;
import services.IUserService;

///Clase UserController:
public class UserController {
	//Atributo:
	private IUserService userService;
	
	//Constructor:
	public UserController(IUserService userService) {
		this.userService = userService;
	}
	
	//Vista con todos los usuarios:
	public String users() {
		List<User> users = userService.getAll();
		return users.toString();
	}
	
	//Solicitud de agregar un usuario:
	public String add(User user) {
		User newUser = null;
		String view = "user not added";
		
		try {
			newUser = userService.insert(user);
			view = newUser.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return view;
	}
	
	//Solicitud de modificar un usuario:
	public String modify(User user) {
		User newUser = null;
		String view = "user not modified";
		
		try {
			newUser = userService.update(user);
			view = newUser.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return view;
	}
	
	//Solicitud de eliminar un usuario:
	public String delete(int idUser) {
		String view = "user not deleted";
				
		try {
			boolean deleted = userService.remove(idUser);
			if(deleted) view = "user deleted";
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return view;
	}
}
