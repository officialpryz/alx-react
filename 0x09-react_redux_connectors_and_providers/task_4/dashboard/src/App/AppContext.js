import React from "react"

export const user = {
    email: "",
    password: "",
    isLoggedIn: false,
    };

    export function longOut() {
        user.isLoggedIn = false;
    }

    export const AppContext = React.createContext({
        user,
        LogOut,
    });