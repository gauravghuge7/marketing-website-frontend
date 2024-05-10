
import {Box, Stack} from '@chakra-ui/react'
import Card from './Card';
import axios from 'axios';

function Payment() {


    const checkoutHandler = async(amount) => {

        const {data:{key}} = await axios.get('http://localhost:5000/api/getkey')
        
        const {data:{order}} = await axios.post('http://localhost:5000/user/payment', () => {
            amount: 2000
        })
        // console.log(data);

        console.log(window);

        var options = {
            key, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "gaurav ghuge",
            description: "Test Transaction of softwares",
            image: "https://example.com/your_logo",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "http://localhost:5000/user/paymentverification",
            prefill: {
                name: "Gaurav ghuge",
                email: "gauravghuge@microsoft.com",
                contact: "8767482793"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#83E633"
            }
        };

        var razor = new window.Razorpay(options);
        
        razor.open();
          
      
    }


    return (
        <div className="flex justify-center items-center m-32 border border-black rounded p-10 w-[75rem]">
            <Box>

                <Stack direction={"row"}>

                    <Card amount={2000} checkoutHandler={checkoutHandler} />
                </Stack>
            </Box>
        </div>
    )
}

export default Payment

