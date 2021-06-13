import React, { useState, useEffect, memo } from 'react';
import Skeleton from 'react-loading-skeleton';
import { getSuggestedProfiles } from '../../services/firebase';

const Suggestions = ({ userId }) => {
    const [profiles, setProfiles] = useState(null);

    useEffect(() => {
        async function suggestedProfiles() {
            const response = await getSuggestedProfiles(userId)
            setProfiles(response)
        }
        if (userId) {
            suggestedProfiles();
        }
    }, userId)

    return !profiles ? (
        <Skeleton count={4} height={30} className="mt-5" />
    ) : profiles.length > 0 ? (
        <p>I am suggested</p>
    ) : null;
}

export default memo(Suggestions)