import { Link } from "react-router-dom";

function Navbar() {

    return (
        <div className="px-4 py-5 bg-gray-100 border-b">
            <nav className="navbar flex gap-3 text-center justify-between text-xl">

                <div></div>
                <ul className="flex gap-3 text-center ">
                    <Link to="/">
                        <li>Home</li>
                    </Link>

                    <li>About</li>
                    <li>Contact</li>

                </ul>
                <div>
                    <button 
                    className="border-blue-400 rounded border mx-3 px-3 py-1 bg-blue-400 hover:bg-blue-600"
                    >
                    sign in</button>
                    <button 
                    className="border-blue-400 rounded border px-3 py-1 bg-blue-400 hover:bg-blue-600"
                    >
                    log in</button>
                </div>

        
            </nav>
        </div>
    )
}

export default Navbar;