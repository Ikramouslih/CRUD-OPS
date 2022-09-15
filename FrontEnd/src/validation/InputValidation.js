import isPastDate from "./isPastDate";

export default function InputValidation(values) {

  const validate=(values)=>{
    const errors = {};
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexCin =/^((([a-z]|[A-Z]){2}[0-9]{6})|(([a-z]|[A-Z])[0-9]{7})){1}$/;
    const regexNumTel = /^(\+212|0|212|\+0|\+21 2|\+21-2)([ \-_/]*)(\d[ \-_/]*){9}$/;

    if(!values.nom){
        errors.nom = "Champ du Nom obligatoire.";
    }
    else if(values.nom.length < 3)
    {
        errors.nom = "La taille du Nom doit avoir 3 caractères minimum.";
    }

    if(!values.prenom){
        errors.prenom = "Champ du Prénom obligatoire.";
    }
    else if(values.prenom.length < 3)
    {
        errors.prenom = "La taille du Prénom doit avoir 3 caractères minimum.";
    }

    if(!values.dateNaissance){
        errors.dateNaissance = "Champ de la Date de Naissance obligatoire.";
    }
    else if (isPastDate(values.dateNaissance) === false ){
        errors.dateNaissance = "La Date De Naissance doit être une date dans le passé.";
    }

    if(!values.cin){
        errors.cin = "Champ du Numero CIN obligatoire.";
    }
    else if (!regexCin.test(values.cin)) {
        errors.cin = "Format de ce Numero CIN est invalid.";
    }

    if(!values.sexe){
        errors.sexe = "Champ du Sexe obligatoire.";
    }

    if(!values.email){
        errors.email = "Champ d'Email obligatoire.";
    }
    else if (!regexEmail.test(values.email)) {
        errors.email = "Format de cet Email est invalid.";
    }

    if(!values.numeroTel){
        errors.numeroTel = "Champ du Numero de Téléphone obligatoire.";
    }
    else if (!regexNumTel.test(values.numeroTel)) {
        errors.numeroTel = "Ce Numero de Téléphone est invalid.";
    }

    return errors;
}

  return validate(values);
}
