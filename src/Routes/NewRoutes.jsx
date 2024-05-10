
import { Routes, Route } from "react-router-dom";
import Login from "../Components/LoginPage/Login.jsx";
import Dashboard from "../Components/Dashboard/Dashboard.jsx";


import Payment from "../Razorpay/Payment.jsx";
import PaymentSuccess from "../Razorpay/PaymentSuccess.jsx";
import Admin from "../Components/Admin/Admin.jsx";



function NewRoutes() {
    return (
        <div>
        
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/history" element={<Admin />} />
            
                <Route path="/paymentSuccess" element={<PaymentSuccess />} />


                <Route path="/admin" element={<Admin/>}/>


            </Routes>
        
        </div>
    )

}



export default NewRoutes;