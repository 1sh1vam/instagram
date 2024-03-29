import React, { useState, useEffect, useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import FirebaseContext from "../context/firebase"
import * as ROUTES from "../constants/routes"

export default function Login() {
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)
    const isInValid = emailAddress === "" || password === ""

    useEffect(()=>{
        document.title = "Login • Instagram"
    }, [])

    const handleClick = async (event) => {
        event.preventDefault()
        console.log("handling the click")

        try {
            await firebase.auth().signInWithEmailAndPassword(emailAddress, password)
            console.log("Signed In")
            history.push(ROUTES.DASHBOARD)
            setError('')
        } catch(err) {
            setError(err)
                console.log(err.message)
        }
    }

    return (
        <div className="container max-w-screen-md mx-auto h-screen flex items-center">
            <div className="relative w-3/5">
                <img draggable="false" src="/images/iphone.png" alt="iphone" />
            </div>
            <div className="flex flex-col w-2/5">
                <div className="flex flex-col items-center bg-white p-4 border mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src="/images/logo.png" alt="instagram logo" className="mt-2 w-6/12 mb-4"/>
                    </h1>

                    {error && <p className="text-xs w-full text-red-500 mb-4">{error.message}</p> }
                    
                    <form method="POST" onSubmit={handleClick}>
                        <input 
                            aria-label="Enter your email address"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border outline-none rounded mb-2"
                            type="text"
                            placeholder="Phone number, username or email"
                            value = {emailAddress}
                            onChange = {({target}) => setEmailAddress(target.value.replace(" ", ""))}
                        />
                        <input 
                            aria-label="Enter your password"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border outline-none rounded mb-2"
                            type="password"
                            placeholder="Password"
                            value = {password}
                            onChange = {({target}) => setPassword(target.value.replace(" ", ""))}
                        />
                        
                        <button type="submit"
                            className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${isInValid && 'cursor-not-allowed opacity-50'}`}
                            disabled = {isInValid}
                        >
                            Log In
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className="text-sm">
                        Don't have an account?{' '}
                        <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-400">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}