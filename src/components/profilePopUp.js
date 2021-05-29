import React from "react"
import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"

export default function ProfilePopUp({setPopup, user, firebase}) {
    console.log(user)
    return (
        <div className="flex flex-col profile-popup">
            <Link  to={`/p/${user.displayName}`}
                className="pt-1 pb-1 pl-5  cursor-pointer flex items-center profile-links"
                onClick={()=>setPopup(prev => !prev)}
            >
                <svg aria-label="Profile" fill="#262626" height="16" viewBox="0 0 32 32" width="16">
                    <path d="M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
                </svg>
                <p className="ml-3">Profile</p>
            </Link>
            <Link className="pl-5 pt-1 pb-1 mb-1 cursor-pointer flex items-center profile-links"
                onClick={()=>setPopup(prev => !prev)}
            >
                <svg aria-label="Saved" fill="#262626" height="16" viewBox="0 0 32 32" width="16">
                    <path d="M28.7 32c-.4 0-.8-.2-1.1-.4L16 19.9 4.4 31.6c-.4.4-1.1.6-1.6.3-.6-.2-.9-.8-.9-1.4v-29C1.8.7 2.5 0 3.3 0h25.4c.8 0 1.5.7 1.5 1.5v29c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM4.8 3v23.9l9.4-9.4c.9-.9 2.6-.9 3.5 0l9.4 9.4V3H4.8z"></path>
                </svg>
                <p className="ml-3">Saved</p>
            </Link>
            <hr/>
            <button className="pl-5 pt-2 pb-2 text-left cursor-pointer focus:outline-none profile-links"
                onClick={()=>setPopup(prev => !prev)}
            >Log Out</button>
        </div>
    )
}