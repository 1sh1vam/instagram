import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    getUserByUserId,
    updateUserFollowing,
} from '../../services/firebase';

export default function SuggestedProfiles({ userDocId, username, profileId, userId }) {
    const [followed, setFollowed] = useState(false)

    async function handleFollowUser() {
        setFollowed(true)
        const [{docId}] = await getUserByUserId(userId);
        await updateUserFollowing(docId, profileId);
    }

    return !followed ? (
        <div className="flex items-center align-items justify-between">
            <div className="flex items-center justify-between">
                <img
                    src={`images/avatars/${username}.jpg`}
                    alt={`Follow ${username}`}
                    className="rounded-full w-8 mr-3"
                />
                <Link to={`/p/${username}`} className="font-medium text-sm">{username}</Link>
            </div>
            <div className="flex">
                <button
                    type="button"
                    className="text-sm font-medium text-blue-500"
                    onClick={handleFollowUser}
                >
                    Follow
                </button>
            </div>
        </div>
    ) : null;
}