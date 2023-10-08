import { Link } from "react-router-dom"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import '../styles/Navbar.css';
import $ from 'jquery';
export function Navbar() {
    return (
        <nav className="navbar navbar-default navbar-expand-md text-light bg-primary">
            <div className="container-fluid">
                <div className="navbar-header">
                    <img src= "https://i.ibb.co/wdgtqs1/Budget-Buddy-logo.png" alt="bug" height={100} width = {100} />
                    <Link className="text-light navbar-brand" to='/'>BudgetBuddy</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Link className="text-light" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="text-light" to='/finance'>Finance</Link>
                    </li>
                    <li>
                        <Link className="text-light" to='/register'>Register</Link>
                    </li>
                    <li>
                        <Link className="text-light" to='/login'>Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )


}