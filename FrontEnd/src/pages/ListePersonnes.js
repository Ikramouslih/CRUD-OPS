import React, { useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit,faTrash,faEye} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {Link, useLocation} from "react-router-dom";
import { Modal, Button,CloseButton } from 'react-bootstrap';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Notify from "../notifications/Toasts.js";


export default function ListePersonnes() {

    const [personnes, setPersonnes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState("");
    const [fullName, setFullName] = useState("");

    let location = useLocation();

    useEffect(()=>{
        loadPersonnes();
        if(location.state === 'showToast')
        {
            Notify("addSuccess");
            location.state = null;
        }
        else if(location.state === 'deleteToast')
        {
            Notify("deleteSuccess");
            location.state = null;
        }
    },[]);

    const loadPersonnes = async ()=>{
        const result = await axios.get("http://localhost:8080/api/personnes");
        setPersonnes(result.data);
    }

    const deletePersonne = async (id) =>{
        await axios.delete(`http://localhost:8080/api/personnes/${id}`);
        setShowModal(false);
        Notify("deleteSuccess");
        loadPersonnes();
    }   

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

  return (
    <div className='container' id="content-wrap">
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
        <div className='py-5'>
            <table className='table border table-bordered table-hover shadow ' >
                <thead>
                    <tr align="center">
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>CIN</th>
                        <th>Email</th>
                        <th>Opération</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        personnes.length === 0 ?
                        <tr align="center">
                            <td colSpan="11">Aucune Personne disponible.</td>
                        </tr> 
                        :
                        personnes
                        .sort((a,b) =>a.id > b.id ? 1 : -1)
                        .map((personne)=>(
                            <tr key={personne.id} align="center">
                                    <td>{personne.id}</td>
                                    <td>{personne.nom}</td>
                                    <td>{personne.prenom}</td>
                                    <td>{personne.cin}</td>
                                    <td>{personne.email}</td>
                                    <td>
                                        <Link to={`/Profil/${personne.id}`} title="Afficher" className='btn btn-success mx=2 btn-sm' ><FontAwesomeIcon icon={faEye}/></Link>{" "}

                                        <Link to={`/modifierPersonne/${personne.id}`} title="Modifier" className='btn btn-primary mx=2 btn-sm'>
                                            <FontAwesomeIcon icon={faEdit}/>
                                        </Link> {" "}
                                        <button 
                                        className='btn btn-danger mx=2 btn-sm'  title="Supprimer"
                                        onClick={() => handleClickDelete(personne.id, personne.nom, personne.prenom)}>
                                            <FontAwesomeIcon icon={faTrash}/>
                                        </button>
                                    </td>  
                                </tr>
                        ))}
                </tbody> 
            </table>
        </div>
        <ToastContainer className="marginBottom10"/>
    </div>
  )
}
