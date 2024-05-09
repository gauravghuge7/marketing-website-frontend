
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
    <div className="bg-green-300 h-screen ">

      <header className="bg-gray-400 text-center text-2xl h-8 "> Login page</header>


      <main className="m-auto w-full max-w-md py-24 px-12 text-center text-2xl">

        <header><h1>Registeration page</h1></header>

        <form 
          className="border border-black rounded-lg px-4 py-24  bg-white flex flex-col items-center"
        >

          <label> mobile number</label>
          <input 
            type="number" 
            placeholder="Enter phone number" 
            className="border border-black rounded-lg px-1 py-1 text-xl bg-white flex flex-col items-center" 
            required
          />
          

          <button 
            type="submit" 
            className="border border-black outline-none rounded-xl mx-2 my-3 py-1 px-10" 
            onClick={sendData()}
          >  
          Get Otp</button>


        </form>
      </main>
      
    </div>
  )
}

export default Login
