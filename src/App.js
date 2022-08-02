import Header from "./Component/fisrt/Header";
import {
Routes,
  Route
  
} from "react-router-dom"
import Login from "./Component/login/Login";
import Home from "./Component/home/Home";
import Details from "./Component/Detail/Details";
import List from "./Component/list/List";
function App() {
  return (
    <>
    <Routes>
     <Route path="/Login" element={<Login/>}/>
     <Route path="/" element={<Header/>}/>
     <Route path="/Home" element={<Home/>}/>
     <Route path="/Details" element={<Details/>}/>
     <Route path="/MyList" element={<List/>}/>
    
    </Routes>
    </>
  );
}

export default App;
