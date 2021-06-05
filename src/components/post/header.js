import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ username }) {

    return (
        <div className="border-b p-4 py-3">
            <div className="flex items-center w-content">
                <Link to={`/p/${username}`} className="flex items-center">
                    <img src={`images/avatars/${username}.jpg`} alt={`${username} profile picture`}
                        className="rounded-full w-8 h-8 mr-2"
                    />
                    <p className="font-medium">{username}</p>
                </Link>
            </div>
        </div>
    )
}