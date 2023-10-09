import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import '../styles/Navbar.css';
import { useEffect } from "react";
import { useUser } from "../contexts/UserContext";
export function Navbar() {

    const { currentUser, setCurrentUser } = useUser();

    useEffect(() => {
        if(!localStorage.getItem('user')){
            setCurrentUser(null);
        }
    })

    const RenderLinks = () => {
        if (currentUser != null) {
            return (
                <>
                    <li>
                        <Link className="" to={`dashboard/${currentUser.data.id}`}>Dashboard</Link>
                    </li>
                    <li>
                        <Link className="" to='#'>Logout</Link>
                    </li>
                    <li>
<<<<<<< Updated upstream
                        <Link className="text-light" to={`chatbot/${currentUser.data.id}`}>Chatbot</Link>
=======
                        <Link className="" to='/chatbot'>Chatbot</Link>
>>>>>>> Stashed changes
                    </li>
                    <li>
                        <Link className="" to={`entry/${currentUser.data.id}`}>FinanceEntry</Link>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li>
                        <Link className="" to='/register'>Register</Link>
                    </li>
                    <li>
                        <Link className="" to='/login'>Login</Link>
                    </li>
                </>
            )
        }
    }

    return (
        <nav className="navbar navbar-default navbar-expand-md text-light bg-primary">
            <div className="container-fluid">
                <div className="navbar-header">
                    <img src= "https://i.ibb.co/wdgtqs1/Budget-Buddy-logo.png" alt="bug" height={100} width = {100} />
                    <Link className="text-light navbar-brand" to='/'>BudgetBuddy</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Link className="" to='/'>Home</Link>
                    </li>
                    <RenderLinks />
                </ul>
            </div>
        </nav>
    )


}