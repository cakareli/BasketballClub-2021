import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function HomePage() {

    let navigator = useNavigate()
    const {value, setValue} = useContext(UserContext)
    const currentUser = localStorage.getItem("currentUser")
    var role;
    if(currentUser){
        const userObj = JSON.parse(currentUser)
        role = userObj.role
    }
    

    function LogOut() {
        localStorage.removeItem("currentUser");
        setValue(null)
        navigator("/")
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