
import axios from 'axios'
import {useState} from 'react'


const Verify = ({phoneNumber}) => {
    
    const [otp, setOtp] = useState('')
        
    const handleVerifyOtp = async(event) => {

        event.preventDefault();

        console.log(phoneNumber);   
        console.log(otp);

        const config = {
            "headers" : {
                "Content-Type":"application/json"
            }
        }
        const body = JSON.stringify({
            
            mobileNumber: phoneNumber,
            otp: otp
        })

        
        
        const response = await axios.post('http://localhost:5000/user/verify', body, config)
        console.log(response)
        
    }



    return (
        <div>
            <h1>verify otp</h1>
            <label>
                OTP :<input type="text" value={otp} name="otp" onChange={e => setOtp(e.target.value)} />
            </label>
            <button onClick={handleVerifyOtp}>Verify OTP</button>



        </div>
    )
}







export {

    Verify
}
