package com.projet.formulaire.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table
public class Personne {

	@Id
	@SequenceGenerator
	(
		name = "personne_sequence",
		sequenceName = "personne_sequence",
		allocationSize = 1
	)
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "personne_sequence"
	)
	
	
	private Long id;
	
	@NotEmpty(message="Champ du Nom obligatoire.")
	@Size(min=3,message="Taille du Nom invalide.")
	private String nom;
	
	@NotEmpty(message="Champ du Prénom obligatoire.")
	@Size(min=3,message="Taille du Prénom invalide.")
	private String prenom;
	
	@NotEmpty(message="Champ du Prénom obligatoire.")
	private String dateNaissance;
	
	@NotEmpty(message="Champ du CIN obligatoire.")
	@Pattern(regexp="(([a-z]|[A-Z]){2}[0-9]{6})|(([a-z]|[A-Z])[0-9]{7})",message="Numero de CIN invalid.")
	private String cin;
	
	@NotEmpty(message="Champ du Sexe obligatoire.")
	private String sexe;
	
	@NotEmpty(message="Champ d'Email obligatoire.")
	@Email(regexp="^(.+)@(.+)$",message="Email invalid.")
	private String email;
	
	
	@Pattern(regexp="(\\+212|0|212|\\+0)([ \\-_/]*)(\\d[ \\-_/]*){9}",message="Numero de téléphone invalid.")
	private String numeroTel;//Moroccan phone number - src : https://www.regextester.com/102523
	
	private String adresse;
	
	private String situationFamiliale;
	

	public Personne(
			@NotEmpty(message = "Champ du Nom obligatoire.") @Size(min = 3, message = "Taille du Nom invalide.") String nom,
			@NotEmpty(message = "Champ du Prénom obligatoire.") @Size(min = 3, message = "Taille du Prénom invalide.") String prenom,
			@NotEmpty(message = "Champ du Prénom obligatoire.") String dateNaissance,
			@NotEmpty(message = "Champ du CIN obligatoire.") @Pattern(regexp = "([A-Z]{2}[0-9]{6})|([A-Z][0-9]{7})", message = "Numero de CIN invalid.") String cin,
			@NotEmpty(message = "Champ du Sexe obligatoire.") String sexe,
			@NotEmpty(message = "Champ d'Email obligatoire.") @Email(regexp = "^(.+)@(.+)$", message = "Email invalid.") String email,
			@Pattern(regexp = "(\\+212|0|212|\\+0)([ \\-_/]*)(\\d[ \\-_/]*){9}", message = "Numero de téléphone invalid.") String numeroTel,
			String adresse, String situationFamiliale) {
		
		this.nom = nom;
		this.prenom = prenom;
		
		this.dateNaissance = dateNaissance;
		this.cin = cin;
		this.sexe = sexe;
		this.email = email;
		this.numeroTel = numeroTel;
		this.adresse = adresse;
		this.situationFamiliale = situationFamiliale;
	}

	@Override
	public String toString() {
		return "Personne [id=" + id + ", nom=" + nom + ", prenom=" + prenom + ", dateNaissance=" + dateNaissance
				+ ", cin=" + cin + ", sexe=" + sexe + ", email=" + email + ", numeroTel=" + numeroTel + ", adresse="
				+ adresse + ", situationFamiliale=" + situationFamiliale + "]";
	}




	

}
