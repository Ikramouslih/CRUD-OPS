package com.projet.formulaire.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.projet.formulaire.model.Personne;
import com.projet.formulaire.service.PersonneService;

@RestController
@RequestMapping(path = "api")
@CrossOrigin(origins="http://localhost:3000")

public class PersonneController {

	private final PersonneService personneService;
	 
	//constructor
	@Autowired 
	public PersonneController(PersonneService personneService) {
		this.personneService = personneService;
	}

	@GetMapping("/personnes")
	public List<Personne> getPersonnes()
	{
		return personneService.getPersonnes();
		
	}
	
	@GetMapping(path = "/personnes/{personneId}")
	public Optional<Personne> getPersonne(@PathVariable("personneId") Long id)
	{
		return personneService.getPersonne(id);
		
	}
	
	@PostMapping("/ajouterPersonne")
	public void registerNewPersonne(@RequestBody Personne personne)
	{
		personneService.addNewPersonne(personne);
	}
	
	@DeleteMapping(path = "/personnes/{personneId}")
	public void deletePersonne(@PathVariable("personneId") Long id)
	{
		personneService.deletePersonne(id);
	}
	
	@PutMapping(path = "/modifierPersonne/{personneId}")
	public void updatePersonne (@PathVariable("personneId") Long personneId,
								@RequestParam(required = false) String nom,
								@RequestParam(required = false)String prenom,
								@RequestParam(required = false)String dateNaissance,
								@RequestParam(required = false)String cin,
								@RequestParam(required = false)String sexe,
								@RequestParam(required = false)String email,
								@RequestParam(required = false)String numeroTel,
								@RequestParam(required = false)String adresse,
								@RequestParam(required = false)String situationFamiliale
								)
	{
		personneService.updatePersonne(personneId,nom,prenom,dateNaissance,cin,sexe,email,numeroTel,adresse,situationFamiliale);
	}
	
}
