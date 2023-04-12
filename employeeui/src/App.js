import "./App.css";
import { Routes, Route} from "react-router"
import { BrowserRouter } from "react-router-dom"
import Home from "./Components/Home";
import Addemployee from "./Components/Addemployee";
import Viewemployee from "./Components/Viewemployee";
import AdminLogin from "./AdminLogin";
import EmployeeLogin from "./Components/EmployeeLogin";
import ViewOnly from "./Components/ViewOnly";
import UpdateEmployee from "./Components/UpdateEmployee";



function App() {
    return (
        <div style={{textAlign:"center"}}>
          <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/add" element={<Addemployee/>} />
               <Route path="/view" element={<Viewemployee/>} />
               <Route path="/admin" element={<AdminLogin/>} />
               <Route path="/Employee" element={<EmployeeLogin/>} />
               <Route path="/viewonly" element={<ViewOnly/>} />
               <Route path="/update" element={<UpdateEmployee/>} />
      
            </Routes> 
            </BrowserRouter>
        </div>
    );
}

export default App;

