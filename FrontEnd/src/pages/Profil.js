import React, { useEffect, useState } from 'react'
import {Link, useParams, useLocation, useNavigate} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit,faTentArrowTurnLeft, faTrash} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {ToastContainer} from "react-toastify";
import { Modal, Button,CloseButton } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import Notify from "../notifications/Toasts.js";
import profil from "./profil.png"


export default function Profil() {

    let location = useLocation();
    const navigate = useNavigate();

    const {id} = useParams();

    const [deleteId, setDeleteId] = useState("");
    const [fullName, setFullName] = useState("");
    const [showModal, setShowModal] = useState(false);

    const [personne,setPersonne] = useState({
        nom:"",
        prenom :"",
        dateNaissance:"",
        cin:"",
        sexe:"",
        email:"",
        numeroTel:"",
        adresse:"",
        situationFamiliale:"",
    })

    useEffect(()=>{
        loadPersonne();
        if(location.state === 'showToast')
        {
            Notify("editSuccess");
            location.state = null;
        }
    })

    const loadPersonne = async () => {
        const result = await axios.get(`http://localhost:8080/api/personnes/${id}`);
        setPersonne(result.data);
    };

    const handleCloseModal = ()=>
    {
        setShowModal(false);
    }

    const handleClickDelete = (id,nom,prenom)=>
    {
        setShowModal(true);
        setDeleteId(id);
        setFullName(nom + " " + prenom);

    }

    const deletePersonne = async (id) =>{
        await axios.delete(`http://localhost:8080/api/personnes/${id}`);
        setShowModal(false);
        navigate('/', {state: 'deleteToast'});
    }   

  return (
    <div className='container' id="content-wrap" style={{marginTop:"18px"}}>
        <Modal
            show={showModal}
            size="md"
            backdrop="static"
            >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                {fullName}
                </Modal.Title>
                <CloseButton onClick={handleCloseModal}/>
            </Modal.Header>
            <Modal.Body>
                <p>
                Voulez-vous vraiment supprimer cette Personne?
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={()=>deletePersonne(deleteId)}>Supprimer</Button>
                <Button onClick={handleCloseModal}>Annuler</Button>
            </Modal.Footer>
            </Modal>

    <section style={{backgroundColor: "#eee"}}>
            <div className="container py-5">

                <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4">
                    <div className="card-body text-center">
                        <img src={profil} alt="avatar"
                        className="rounded-circle img-fluid" style={{width: "216px"}}/>
                        <h5 className="my-3">{personne.nom + " " + personne.prenom}</h5>
                        <p className="text-muted mb-4">ID : #{personne.id}</p>
                        <div className="d-flex justify-content-center mb-2">
                        <Link to={`/modifierPersonne/${personne.id}`} type="button" className="btn btn-success btn-sm">
                        <FontAwesomeIcon icon={faEdit}/> Modifier</Link>
                        <button 
                            className='btn btn-danger btn-sm ms-1 '
                            onClick={() => handleClickDelete(personne.id, personne.nom, personne.prenom)}>
                            <FontAwesomeIcon icon={faTrash}/> Supprimer
                        </button>
                        <Link to={"/"} type="button" className="btn btn-outline-primary ms-1 btn-sm">
                        <FontAwesomeIcon icon={faTentArrowTurnLeft}/> Retour </Link> 
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card mb-4">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Date de Naissance</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{personne.dateNaissance}</p>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Numéro CIN</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{personne.cin}</p>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Sexe</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{personne.sexe}</p>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{personne.email}</p>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Téléphone</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{personne.numeroTel}</p>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Adresse</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{personne.adresse === "" ? "-------" : personne.adresse }</p>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Situation Familiale</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{personne.situationFamiliale === "" ? "-------" : personne.situationFamiliale}</p>
                        </div>
                        </div>
              
                        
                    </div>
                    </div>
                    
                    </div>
                </div>
                </div>
                
        </section>
        <ToastContainer className="marginBottom10"/>

        </div>
  );
}
