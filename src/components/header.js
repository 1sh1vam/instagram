import React from "react"
import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"

export default function Header() {
    const user = null

    return (
        <header className="w-full header-hei border-b mb-8 bg-white">
            <div className="container h-full maxw-975 mx-auto flex justify-between items-center">
                <div className="hei-29">
                    <img src="images/instalogo.png" alt="instagram logo" />
                </div>

                <div className="flex justify-between items-center">
                    {user ? (
                        <>
                            <p>user</p>
                        </>
                    ): (
                        <>  
                            <Link to={ROUTES.LOGIN}>
                                <button
                                    className="bg-blue-500 rounded text-white text-sm 
                                    font-medium px-3 mr-3 py-1"
                                >Log In</button>
                            </Link>
                            <Link to={ROUTES.SIGN_UP}>
                                <button
                                    className="text-blue-500 font-medium"
                                >Sign Up</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}