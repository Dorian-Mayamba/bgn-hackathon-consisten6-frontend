import { Link } from "react-router-dom"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export function Navbar(){
    return(
        <nav className="navbar navbar-expand-md text-light bg-primary">
            <ul className="nav">
                <li>
                    <Link className="text-light" to='/'>Home</Link>
                </li>
                <li>
                    <Link className="text-light" to='/finance'>Finance</Link>
                </li>
            </ul>
        </nav>
    )
}