package com.EduBridge;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*")// CORS
public class PlayersController {
	@Autowired
	PlayersService ps;
	@GetMapping("employees")
	public List<PlayersModel> getAll(){
		System.out.println("Request Rec");
		return this.ps.allPlayers();
	}

	
	@RequestMapping(value="/emp/{id}", method=RequestMethod.GET)
	public PlayersModel getP(@PathVariable int id) {
		System.out.println("In controller");
		return ps.getPlayer(id);
	
	}
	@PostMapping("save")
	public void addPlayer(@RequestBody PlayersModel p) {
		this.ps.savePlayer(p);
	}
	
	@PostMapping("update")
	public void upadatePlayer(@RequestBody PlayersModel p) {
		this.ps.updatePlayer(p);
	}
	@DeleteMapping("delete/{id}")
	public void deletePlayer(@PathVariable int id) {
		System.out.println("requested for deleting");
		this.ps.removePlayer(id);
}

}
