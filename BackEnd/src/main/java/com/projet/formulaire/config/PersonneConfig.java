package com.projet.formulaire.config;

import com.projet.formulaire.repository.*;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.projet.formulaire.model.Personne;

@Configuration
public class PersonneConfig {
	@Bean
	CommandLineRunner commandLineRunner(PersonneRepository repository)
	{
		return args -> {
			Personne oumaima = new Personne(
					"Ikram",
					"Ikram",
					"2000-03-28",
					"BK222222",
					"Femme",
					"ikram@gmail.com",
					"+212666666666",
					"Hay hassani",
					"Célibataire");	
			
			Personne ikram = new Personne(
					"Oumaima",
					"Oumaima",
					"2001-07-02",
					"B7859467",
					"Femme",
					"oumaima@gmail.com",
					"0788888888",
					"Ain Chock",
					"Célibataire");
			
			Personne walid = new Personne(
					"Walid",
					"Walid",
					"1999-01-01",
					"A4876655",
					"Homme",
					"walid@gmail.com",
					"06 44 44 44 44",
					"Ain Sbaa",
					"Célibataire");
			
			Personne aymene = new Personne(
					"Soualem",
					"Aymene",
					"2001-07-10",
					"MA846653",
					"Homme",
					"aymene@gmail.com",
					"06-22-11-60-88",
					"Ain Chock",
					"Célibataire");
			
			repository.saveAll(List.of(oumaima,ikram,walid,aymene));
		};
	}
}
