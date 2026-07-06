import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Case A: The page REQUIRES you to be logged in (e.g., Dashboard)
        if (authentication) {
            if (!authStatus) {            // But you are NOT logged in...
                navigate("/login");       // ...go to login page!
            }
        }
        // Case B: The page forbids logged-in users (e.g., Login/Signup pages)
        else {
            if (authStatus) {              // But you ARE already logged in...
                navigate("/");             // ...go back to the home page!
            }
        }

        setLoading(false);                 // Check is complete, turn off loading screen
    }, [authStatus, authentication, navigate]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return <>{children}</>;
}