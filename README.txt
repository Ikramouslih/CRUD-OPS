Collaborator : @OumaimaElg

Form for personal information - A full stack API using CRUD operations (create, delete, update, get), done with Spring Boot and ReactJS.

==> Back-End : (on Eclipse)
	.Spring Boot : RESTful API
	   *Spring 2.7.3
	   *Java 17
	   *DB : PostgreSql
	   *Test : Insomnia 
	   *Dependencies : SpringWeb , PostgreSQL, Spring DATA JPA, Thymeleaf

==> Front-End : (on Visual Studio Code)
	.REACTJS: React Hooks & Functional Programming
	   *react-router-dom
	   *axios
	   *CSS
	   *react-bootstrap
	   *fortawesome
	   *react-toastify
		
###To Run###

1).Open the Back-End project on an IDE.
2).Run the project as a Java Application.
3).Open (http://localhost:8000/api/personnes) to view the JSON format of the data in your browser.

4).Open VSC's terminal.
5).In the project directory, run ### `npm install` ### to install all modules listed as dependencies in package.json.
6).Run: ### `npm start` ### to run the application in the development mode.
7).Open (http://localhost:3000) to view the final project in your browser.


###Back-End HELP###

#GET ALL: 
http://localhost:8080/api/personnes

#GET BY ID:
http://localhost:8080/api/personnes/{id}

#POST: 
http://localhost:8080/api/ajouterPersonne
{
	"nom": "nom1",
	"prenom": "prenom1",
	"dateNaissance": "1960-11-27",
	"cin": "B7777775",
	"sexe": "Femme",
	"email": "nom1@gmail.com",
	"numeroTel": "+2126 66 66 66 66"
	"adresse": "Somewhere",
	"situationFamiliale": "Célibataire"
}

#DELETE:
http://localhost:8080/api/personnes/{id}

#PUT:
http://localhost:8080/api/modifierPersonne/{id}




