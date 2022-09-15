import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import ListePersonnes from './pages/ListePersonnes';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AddPersonne from './pages/AddPersonne';
import EditPersonne from './pages/EditPersonne';
import Profil from './pages/Profil';

function App() {
  return (
    <div className='App' id="page-container">
      <Router>
        <NavBar/>

        <Routes>
          <Route exact path="/" element={<ListePersonnes/>}></Route>
          <Route exact path="/ajouterPersonne" element={<AddPersonne/>}></Route>
          <Route exact path="/modifierPersonne/:id" element={<EditPersonne/>}></Route>
          <Route exact path="/Profil/:id" element={<Profil/>}></Route>
        </Routes>
      </Router>
      
        <Footer/>
    </div>
  );
}

export default App;
