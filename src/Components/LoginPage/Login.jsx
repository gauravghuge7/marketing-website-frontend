<<<<<<< HEAD
import axios from 'axios';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Verify } from '../Otp/Verify';
import Dashboard from '../Dashboard/Dashboard';
import Payment from '../../Razorpay/Payment';
import Admin from '../Admin/Admin';
import PaymentSuccess from '../../Razorpay/PaymentSuccess';



const Home = ({phoneNumber, referralCode, setPhoneNumber, sendData, setReferralCode}) => {
=======
import { Link } from "react-router-dom";
import Otp from "../Otp/Otp.jsx";
import { useState } from "react";

function Login() {
  const [verificationCode, setVerificationCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [referral, setReferral] = useState("");

  function sendData() {
    // Assuming you want to send data when the form is submitted
    fetch("http://localhost:5000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber,
        referral,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  }
>>>>>>> 33809ee342f8de23eeceff8925a8e021dfb351dc

  return (
    <div className="bg-blue-100 h-full w-full">
      <main className="m-auto w-full max-w-md py-24 px-12 text-center text-2xl">
        <header className="text-center text-3xl font-bold py-4">
          <h1>Registration page</h1>
        </header>
        <form
<<<<<<< HEAD
          className="rounded-lg px-8 py-10 w-96 bg-white shadow-lg"
          id='form1'
=======
          className="border border-black rounded-lg px-1 py-2 w-[30rem] h-[52rem] bg-gray-200 flex flex-col "
          onSubmit={(e) => {
            e.preventDefault();
            sendData();
          }}
>>>>>>> 33809ee342f8de23eeceff8925a8e021dfb351dc
        >
          <img src="../../../assets/image.jpg" alt="" height="100px" width="500px" />
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            className="border border-black rounded-lg px-24 py-1 text-xl flex flex-col text-start  bg-white"
            minLength={10}
            maxLength={10}
            required
          />
          <input
            type="text"
            id="referral"
            name="referral"
<<<<<<< HEAD
            placeholder="Referral (optional)"
            className="border border-black rounded-lg px-4 py-2 text-xl mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            minLength={10}
            maxLength={15}
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
=======
            value={referral}
            onChange={(e) => setReferral(e.target.value)}
            placeholder="Referral (optional)"
            className="border border-black rounded-lg px-24 py-1 my-3 text-xl flex flex-col text-start  bg-white"
            minLength={10}
            maxLength={15}
>>>>>>> 33809ee342f8de23eeceff8925a8e021dfb351dc
          />
          <input
            id="verificationCode"
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="Enter OTP for Verification"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <div>
            <input type="checkbox" id="remember" name="remember" className="text-black text-sm" required />
            <label htmlFor="remember" className="text-black text-sm">
              &nbsp; I accept the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>
<<<<<<< HEAD

          <Link to="/verify">
            <button
              type="button"
              className="border border-black bg-orange-400 hover:bg-orange-600 rounded-xl py-2 px-6 w-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              onClick={sendData}
            >
              Get OTP
            </button>
          </Link>

          <p className="text-sm text-gray-900 mt-4">
=======
          <button
            type="submit"
            className="border border-black bg-orange-400 hover:bg-orange-600 outline-none rounded-xl my-4 py-1 px-40"
          >
            Get OTP
          </button>
          <p className="text-sm text-gray-900 text-center">
>>>>>>> 33809ee342f8de23eeceff8925a8e021dfb351dc
            By creating an account you agree to our <br />
            <a className="hover:text-green-600" href="#">
              Terms of Service
            </a>{" "}
            and
            <a className="hover:text-green-600" href="#">
              {" "}
              Privacy Policy
            </a>
          </p>
        </form>
<<<<<<< HEAD

        
=======
        <Link to="/dashboard" className="text-black text-xl mx-4 border rounded">
          <p>Dashboard</p>
        </Link>
>>>>>>> 33809ee342f8de23eeceff8925a8e021dfb351dc
      </main>

      
    </div>
  );
<<<<<<< HEAD
};


function Login() {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [referralCode, setReferralCode] = useState('');

  // const [otp, setOtp] = useState('');
 

  const sendData = async(event) => {

    event.preventDefault();

    console.log(phoneNumber);
    console.log(referralCode);

    const config = {
      "headers" : {
        "Content-Type":"application/json"
      }
    }
    
    const body = JSON.stringify({
      phoneNumber,
      referralCode
    })

    
    try {
  
      
      const response = await axios.post('http://localhost:5000/user/register', body, config)
     
      console.log(response)
      const data = response.data;
  
      console.log(response.data.message)
      alert(data.message)
  
      window.location.href = 'http://localhost:5173/verify';
      
    }   
  catch (error) {
    console.log(error)
  }



     
  }


  return (
    
    <Routes>

        <Route path="/" element={<Home phoneNumber={phoneNumber} referralCode={referralCode} setPhoneNumber={setPhoneNumber} setReferralCode={setReferralCode} sendData={sendData} />} />

        <Route path="/verify" element={<Verify phoneNumber={phoneNumber} />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/payment" element={<Payment />} />
        <Route path="/history" element={<Admin />} />
        
    
        <Route path="/paymentSuccess" element={<PaymentSuccess />} />


      </Routes>
  );
=======
>>>>>>> 33809ee342f8de23eeceff8925a8e021dfb351dc
}

export default Login;
