import axios from 'axios';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Verify } from '../Otp/Verify';
import Dashboard from '../Dashboard/Dashboard';
import Payment from '../../Razorpay/Payment';
import Admin from '../Admin/Admin';
import PaymentSuccess from '../../Razorpay/PaymentSuccess';



const Home = ({phoneNumber, referralCode, setPhoneNumber, sendData, setReferralCode}) => {

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen flex justify-center items-center">
      <main className="m-auto py-12 px-6 text-center">
        <header className="text-3xl font-bold py-4">
          <h1>Registration Page</h1>
        </header>

        <form
          className="rounded-lg px-8 py-10 w-96 bg-white shadow-lg"
          id='form1'
        >
          <img
            src="../../../assets/image-.png"
            alt=""
            className="mx-auto mb-6 accent-indigo-50"
            style={{ height: '140px', width: '200px' }}
          />

          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Enter phone number"
            className="border border-black rounded-lg px-4 py-2 text-xl mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            minLength={10}
            maxLength={10}
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <input
            type="text"
            id="referral"
            name="referral"
            placeholder="Referral (optional)"
            className="border border-black rounded-lg px-4 py-2 text-xl mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            minLength={10}
            maxLength={15}
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
          />

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-orange-400"
              required
            />
            <label htmlFor="remember" className="text-sm text-black ml-2">
              I accept the <a href="#" className="underline">Terms of Service</a> and{" "}
              <a href="#" className="underline">Privacy Policy</a>
            </label>
          </div>

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
            By creating an account you agree to our <br />
            <a href="#" className="underline hover:text-green-600">Terms of Service</a>{" "}
            and
            <a href="#" className="underline hover:text-green-600">Privacy Policy</a>
          </p>
        </form>

        
      </main>

      
    </div>
  );
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
}

export default Login;
