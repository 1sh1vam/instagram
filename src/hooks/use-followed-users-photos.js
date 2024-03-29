import { useState, useContext, useEffect } from "react"
import UserContext from "../context/user"
import { getUserByUserId, getUserFollowedPhotos } from "../services/firebase"

export default function useFollowedUsersPhotos() {
    const [photos, setPhotos] = useState(null)
    const { user } = useContext(UserContext);
    const userId = user ? user.uid : '';

    useEffect(() => {
        async function getTimelinePhotos() {
            const followingUserIds = await getUserByUserId(userId)

            if (followingUserIds
                && followingUserIds.length > 0
                && followingUserIds[0].following.length > 0) {
                const followedUserPhotos = await getUserFollowedPhotos(userId, followingUserIds[0].following)
                followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated)
                setPhotos(followedUserPhotos)
            }
        }

        getTimelinePhotos();
    }, [userId])

    return { photos }
}