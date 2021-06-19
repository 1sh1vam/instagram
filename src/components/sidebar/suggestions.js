import React, { useState, useEffect, memo } from 'react';
import Skeleton from 'react-loading-skeleton';
import { getSuggestedProfiles } from '../../services/firebase';
import SuggestedProfiles from './suggested-profiles';

const Suggestions = ({ userId }) => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        async function suggestedProfiles() {
            const response = await getSuggestedProfiles(userId)
            setProfiles(response)
        }
        if (userId) {
            suggestedProfiles();
        }
    }, [userId])

    return !profiles ? (
        <Skeleton count={4} height={30} className="mt-5" />
    ) : profiles.length > 0 ? (
        <div className="flex flex-col">
            <div className="flex items-center justify-between mt-2 mb-3">
                <p className="text-sm text-gray-400 font-medium">Suggestions For You</p>
            </div>
            <div className="grid gap-3">
                {profiles.map(profile => (
                    <SuggestedProfiles
                        key={profile.docId}
                        userDocId={profile.docId}
                        username={profile.username}
                        profileId={profile.userId}
                        userId={userId}
                    />
                ))}
            </div>
        </div>
    ) : null;
}

export default memo(Suggestions)