import '../styles/home.css';
import { useEffect, useState } from "react";
import { useUser } from "../contexts/UserContext";
export function Home() {
    return (
        <div className='home-page'>
            <div className="navbar-header"></div>
            <div className='text'>
                <p>Meet the perfect financial advisor for you.</p>
                <h1>Consult your advisor anywhere, at any time.</h1>
            </div>
        </div>
    )
}


