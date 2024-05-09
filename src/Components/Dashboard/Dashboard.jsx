import './Dashboard.css';

function Dashboard() {
  return (

    <div>
        <div
            className="w-[35rem] h-[9rem] border border-black outline-none rounded-lg p-4 text-center m-4  items-center "
        >
            <div>
                <h1
                    className='text-3xl font-bold'
                > Total Rpin Balance</h1>
            </div>
            
            <div className='flex items-center'>

                <p className='text-2xl'></p>
                <h2> </h2>
            </div>
        </div>



        <div 
            id="refferal"
            className="flex items-center m-auto justify-around"
        >

            <div 
                className="w-[30rem] h-[15rem]  border bg-green-200 border-green-400 rounded-lg p-4 text-center flex flex-col justify-around items-center text-2xl text-bold "
            >
                <h2 
                    className=""
                > ID Created today </h2>

                <h3 className=""></h3>
            </div>

            <div 
                className="w-[30rem] h-[15rem] m-4 border bg-green-200 border-green-400 rounded-lg p-4 text-center flex flex-col justify-around items-center text-2xl text-bold"
            >
                <h2 
                    className=""
                > Total Referrals </h2>

                <h3 className=""></h3>
            </div>
        
        </div>

        <div 
            className="w-[85%] h-[15rem] my-4 border bg-orange-200 border-orange-400 rounded-lg p-4 text-center flex justify-around items-center text-2xl text-bold mx-auto"
        >
            <h2 
                className=""
            > Total Income </h2>

            <h3 className="">
                

            </h3>
        </div>

        
      
    </div>
  )
}

export default Dashboard;
