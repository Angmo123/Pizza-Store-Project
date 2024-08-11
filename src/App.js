import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import AddNewItem from "./Components/AddNewItem";
import About from "./Components/About";
import DisplayAllItem from "./Components/DisplayAllItem";
import UpdateItems from "./Components/UpdateItems";

import {Routes,Route} from "react-router-dom";


function App(){
  return(
    <>
    <Menu/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/AddNewItem" element={<AddNewItem/>}/>        
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/DisplayAllItem" element={<DisplayAllItem/>}/>
        <Route path="/UpdateItems/:id" element={<UpdateItems/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App;