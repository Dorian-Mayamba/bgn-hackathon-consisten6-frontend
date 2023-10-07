import { Link } from "react-router-dom"
export function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/finance'>Finance</Link>
                </li>
            </ul>
        </nav>
    )
}