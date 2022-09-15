package com.projet.formulaire.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projet.formulaire.model.Personne;

@Repository
public interface PersonneRepository
		extends JpaRepository<Personne,Long> {

	Optional<Personne> findPersonneByEmail(String email);
	Optional<Personne> findPersonneByCin(String cin);
	Optional<Personne> findPersonneById(Long id);

}
