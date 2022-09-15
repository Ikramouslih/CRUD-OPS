import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <img src = "https://upload.wikimedia.org/wikipedia/commons/4/4d/Farm-Fresh_application_form_edit.png" width="30" height="30" alt="PIC"  style={{marginRight : "8px"}}></img>
                    API Full Stack - Spring Boot & ReactJS
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="btn btn-outline-light" to="/ajouterPersonne" style={{position:"absolute",top:'10px', right:'10px'}}>
              Ajouter une Personne
            </Link>
           </div> 
        </div>
      </nav>
    </div>
  );
}