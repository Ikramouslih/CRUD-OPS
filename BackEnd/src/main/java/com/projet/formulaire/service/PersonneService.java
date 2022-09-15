package com.projet.formulaire.service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projet.formulaire.model.Personne;
import com.projet.formulaire.repository.PersonneRepository;

@Service
public class PersonneService {
	
		private final PersonneRepository personneRepository;
		
		
		@Autowired
		public PersonneService(PersonneRepository personneRepository) {
			this.personneRepository = personneRepository;
		}


		public List<Personne> getPersonnes()
		{
			return personneRepository.findAll();
			
		}
		
		public Optional<Personne> getPersonne(Long id)
		{
			Optional<Personne> personneOptional = personneRepository.findPersonneById(id);
			if(!personneOptional.isPresent())
			{
				throw new IllegalStateException("Cette personne n'existe pas.");
			}
			return personneRepository.findById(id);
		}
		
		
		public void addNewPersonne(Personne personne)
		{
			Optional <Personne> personneOptional1 = personneRepository.findPersonneByEmail(personne.getEmail());
			Optional <Personne> personneOptional2 = personneRepository.findPersonneByCin(personne.getCin());

			if(personneOptional1.isPresent() || personneOptional2.isPresent())
			{
				throw new IllegalStateException("Cette adresse Email ou Ce numero CIN existe déja.");
			}
			personneRepository.save(personne);
		}


		public void deletePersonne(Long personneId) {
			
			boolean exists = personneRepository.existsById(personneId);
			if(!exists)
			{
				throw new IllegalStateException("Cette personne n'existe pas.");
			}
			personneRepository.deleteById(personneId);
		}

		
		@Transactional
		public void updatePersonne(
				Long personneId, 
				String nom,
				String prenom,
				String dateNaissance,
				String cin,
				String sexe,
				String email,
				String numeroTel,
				String adresse,
				String situationFamiliale
				) 
		{
			
			Personne personne = personneRepository.findById(personneId).orElseThrow(()-> new IllegalStateException("Cette personne n'existe pas."));
			
			if(nom != null && nom.length()>0 && !Objects.equals(personne.getNom(),nom))
			{
				personne.setNom(nom);
			}
			if(prenom != null && prenom.length()>0 && !Objects.equals(personne.getPrenom(),prenom))
			{
				personne.setPrenom(prenom);
			}
			if(dateNaissance != null && !Objects.equals(personne.getDateNaissance(),dateNaissance))
			{
				personne.setDateNaissance(dateNaissance);
			}
			
			if(cin != null && cin.length()>0 && !Objects.equals(personne.getCin(),cin))
			{
				Optional<Personne> personneOptionalCin = personneRepository.findPersonneByCin(cin);
				if(personneOptionalCin.isPresent())
				{
					throw new IllegalStateException("Ce numero CIN existe déja.");
				}
				personne.setCin(cin);
			}
			
			if(sexe != null && sexe.length()>0 && !Objects.equals(personne.getSexe(),sexe))
			{
				personne.setSexe(sexe);
			}
			
			if(email != null && email.length() > 0 && !Objects.equals(personne.getEmail(), email))
			{
				Optional<Personne> personneOptionalEmail = personneRepository.findPersonneByEmail(email);
				if(personneOptionalEmail.isPresent())
				{
					throw new IllegalStateException("Cette adresse Email existe déja.");
				}
				personne.setEmail(email);
			}
			
			if(numeroTel != null && numeroTel.length()>0 && !Objects.equals(personne.getNumeroTel(),numeroTel))
			{
				personne.setNumeroTel(numeroTel);
			}
			
			if(adresse != null && adresse.length()>0 && !Objects.equals(personne.getAdresse(),adresse))
			{
				personne.setAdresse(adresse);
			}
			
			if(situationFamiliale != null && situationFamiliale.length()>0 && !Objects.equals(personne.getSituationFamiliale(),situationFamiliale))
			{
				personne.setSituationFamiliale(situationFamiliale);
			}
			
			
		}
		
}
