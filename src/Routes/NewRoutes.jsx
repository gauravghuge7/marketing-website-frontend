
import { Routes, Route } from "react-router-dom";
import Login from "../Components/LoginPage/Login.jsx";
import Dashboard from "../Components/Dashboard/Dashboard.jsx";


function NewRoutes() {
    return (
        <div>
        
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        
        </div>
    )

}



export default NewRoutes;