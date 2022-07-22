import React from "react"
import { useNavigate } from "react-router-dom"

function ErrorPage() {
    let navigate = useNavigate();
    return (
        <div>
            <h2>Error</h2>
            <button onClick={() => navigate("/")}>
                Back to HomePage
            </button>
        </div>
    )
}

export default ErrorPage