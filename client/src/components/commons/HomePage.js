import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {

    let navigator = useNavigate()
    const role = localStorage.getItem("role")

    function LogOut() {
        localStorage.setItem("accessToken",null)
        localStorage.setItem("role",null)
        localStorage.setItem("id",null)
        navigator("/login")
    }
    return (
        <div>
            {
                role === "COACH" ? <h1>Wellcome Coach</h1> : 
                role === "ADMIN" ? <h1>Wellcome Admin</h1> : 
                role === "PLAYER" ? <h1>Wellcome Player</h1> : 
                role === "STAFF" ?  <h1>Wellcome Staff</h1> : 
                role === "PHYSIOTHERAPIST" ?  <h1>Wellcome Physiotherapist</h1> : null
            }
            <br/><br/>
            <button onClick={LogOut}>Log out</button>
        </div>
    )
}

export default HomePage