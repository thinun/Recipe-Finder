
import './App.css'
import Navbar from "./Componunts/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Favorite from './Pages/Favorite/Favorite.jsx'
import Details from "./Pages/Details/Details.jsx";
import {Routes,Route} from "react-router-dom";

function App() {


  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorite"  element={<Favorite/>}/>
        <Route path="/details-item/:id"  element={<Details/>}/>
      </Routes>
    </div>
  )
}

export default App
