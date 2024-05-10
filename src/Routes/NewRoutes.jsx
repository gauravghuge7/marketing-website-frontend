
import { Routes, Route } from "react-router-dom";
import Login from "../Components/LoginPage/Login.jsx";
import Dashboard from "../Components/Dashboard/Dashboard.jsx";
<<<<<<< HEAD

import Payment from "../Razorpay/Payment.jsx";
import PaymentSuccess from "../Razorpay/PaymentSuccess.jsx";
import Admin from "../Components/Admin/Admin.jsx";


=======
import Admin from "../Components/Admin/Admin.jsx";
>>>>>>> 70995b687ac95a007ad1bbd49d095de491424423
function NewRoutes() {
    return (
        <div>
        
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
<<<<<<< HEAD
                <Route path="/payment" element={<Payment />} />
                <Route path="/history" element={<Admin />} />
            
                <Route path="/paymentSuccess" element={<PaymentSuccess />} />

=======
                <Route path="/admin" element={<Admin/>}/>
>>>>>>> 70995b687ac95a007ad1bbd49d095de491424423

            </Routes>
        
        </div>
    )

}



export default NewRoutes;