import React, { useState, useEffect, useContext } from "react"
import FirebaseContext from "../context/firebase"
import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"

export default function SignUp() {
    const [userName, setUserName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {firebase}= useContext(FirebaseContext)

    const isInValid = userName === "" || emailAddress === "" || fullName === "" || password === ""

    const handleUserName = value => {
        if(value.includes(" ")) {
            setError('User Name can not include space')
        } else {
            setError(' ')
            setUserName(value)
        }
    }

    const handleSignUp = async (event) => {
        event.preventDefault()
        try {
            const createdUserResult = await firebase.auth().createUserWithEmailAndPassword(emailAddress, password)
            await createdUserResult.user.updateProfile({
                displayName: userName
            });
            const doc = {
                userId: createdUserResult.user.uid,
                userName,
                fullName,
                emailAddress,
                following: [],
                followers: [],
            }
            await firebase.firestore().collection("users").doc().set({...doc, dateCreated: Date.now()})
            setError(' ')
            console.log(doc)
        } catch(err) {
            setError(err.message)
            setUserName('')
            setEmailAddress('')
            setFullName('')
            setPassword('')
        }
    } 

    useEffect(()=> {
        document.title = "Login • Instagram"
    }, [])
    return (
        <div className="container mx-auto max-w-screen h-screen flex flex-col items-center justify-center">
            <div className="flex w-1/4 flex-col items-center justify-center bg-white p-4 border mb-4">
                <h1 className="flex justify-center w-full">
                    <img src="/images/logo.png" alt='instagram logo' className="mt-5 w-6/12 mb-4" />
                </h1>

                <h3 className="w-4/5 text-center text-lg font-semibold text-gray-400 mb-4">Sign up to see photos and videos from your friends.</h3>
                {error && <p className="text-xs w-4/5 text-red-500 mb-4">{error}</p>}
                <form method='POST' onSubmit={handleSignUp} className="w-4/5">
                    <input aria-label="Enter your email address"
                        type="text"
                        placeholder="Mobile Number or Email"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border outline-none rounded mb-2"
                        value={emailAddress}
                        onChange={({target}) => setEmailAddress(target.value.toLowerCase().replace(" ", ""))}
                    />
                    
                    <input aria-label="Enter your full name"
                        type="text"
                        placeholder="Full Name"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border outline-none rounded mb-2"
                        value={fullName}
                        onChange={({target}) => setFullName(target.value)}
                    />

                    <input aria-label="Enter your user name"
                        type="text"
                        placeholder="Username"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border outline-none rounded mb-2"
                        value={userName}
                        onChange={({target}) => handleUserName(target.value.toLowerCase())}
                    />

                    <input aria-label="Enter password"
                        type="password"
                        placeholder="Password"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border outline-none rounded mb-2"
                        value={password}
                        onChange={({target}) => setPassword(target.value.replace(" ", ""))}
                    />

                    <button type="submit"
                        className={`bg-blue-500 text-white w-full font-bold h-8 border outline-none rounded 
                        ${isInValid && 'opacity-50 cursor-not-allowed'}`}
                        disabled={isInValid}
                    >Sign Up</button>

                </form>
                <p className="w-4/5 text-xs mt-4 mb-5 text-center">By signing up, you agree to 
                our <span className="font-bold">Terms</span>, 
                <span className="font-bold"> Data Policy</span> and <span className="font-bold">Cookies Policy</span>.</p>
            </div>
            <div className="w-1/4 flex justify-center bg-white p-4 border rounded">
                <p className="text-sm">Have an accout?{' '}
                    <Link to={ROUTES.LOGIN} className="font-bold text-blue-400">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    )
}