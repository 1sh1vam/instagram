import React from 'react';

export default function Footer({ caption, username }) {
    return (
        <div className="p-4 pt-2 pb-0">
            <span className="mr-1 font-medium">{username}</span>
            <span>{caption}</span>
        </div>
    )
}