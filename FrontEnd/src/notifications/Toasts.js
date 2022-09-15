import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Notify(type) {

    const notify = (type) =>
    {
        let MyToast;
        switch(type)
        {
            case "addSuccess" :
                MyToast = toast.success('La Personne a été ajoutée.', 
                                    {
                                        position: "bottom-right",
                                        autoClose: 4000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme : "dark"
                                    });
                break;
                
            case "deleteSuccess" :
                MyToast = toast.info('La Personne a été suprimée.', 
                                    {
                                        position: "bottom-right",
                                        autoClose: 4000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                         theme : "dark"
                                        });
                    break;
    
            case "infoExistant" : 
                MyToast =toast.error('Cette adresse Email ou Ce numéro CIN existe déja.', 
                                    {
                                        position: "bottom-right",
                                        autoClose: 4000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme : "dark"
                                    });
                break;

            case "editSuccess" :
                MyToast = toast.success('La Personne a été modifiée.', 
                                    {
                                        position: "bottom-right",
                                        autoClose: 4000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme : "dark"
                                    });
                break;
            
            default : 
                console.log("Error of type!");
        }
        
        return MyToast;
    }

  return notify(type);
}
