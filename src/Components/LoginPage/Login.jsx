
function Login() {

  function sendData() {

    fetch("http://localhost:3000/user/register", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: "+919876543210",
      }),
    })
      
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
      });
  }


    
  return (
    <div className="bg-blue-100 h-full w-full">

      


      <main 
        className="m-auto w-full max-w-md py-24 px-12 text-center text-2xl"
      >

        <header
          className="text-center text-3xl font-bold py-4"
        ><h1>Registeration page</h1></header>

        <form 
          className="border border-black rounded-lg px-1 py-2 w-[30rem] h-[48rem] bg-gray-200 flex flex-col "

          formMethod="post"
          formAction="/register"
          formEncType="multipart/form-data"
        >
          
          <img src="../../../assets/image.jpg" alt="" height="100px" width="500px" />
      

          <input 

            type="tel" 
            id="mobile"
            name="mobile"
           
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
           
            placeholder="referral (optional)" 
            className="border border-black rounded-lg px-24 py-1 my-3 text-xl flex flex-col text-start  bg-white" 
            minLength={10}
            maxLength={15}
           
          />
          <div>
            <input type="checkbox" id="remember" name="remember" className="text-black text-sm" required/>
            <label 
              htmlFor="remember" 
              className="text-black text-sm"
            >&nbsp; I accept the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
      </div>
          
          <button 
            type="submit" 
            className="border border-black bg-orange-400 hover:bg-orange-600 outline-none rounded-xl my-4 py-1 px-40" 
            onClick={sendData()}
          >  
          Get Otp</button>

          

          <p
            className="text-sm text-gray-900 text-center"
          >By creating an account you agree to our <br/>

            <a className=" hover:text-green-600" href="#">Terms of Service</a> and 
            <a className=" hover:text-green-600" href="#"> Privacy Policy</a>

          </p>


        </form>
      </main>
      
    </div>
  )
}

export default Login
