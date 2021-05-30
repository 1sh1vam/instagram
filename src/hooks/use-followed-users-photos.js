import { useState, useContext, useEffect } from "react"
import UserContext from "../context/user"
import { getUserByUserId } from "../services/firebase"

export default function useFollowedUsersPhotos() {
    const [photos, setPhotos] = useState(null)
    const { user: {uid: userId = ""}} = useContext(UserContext)

    useEffect(() => {
        async function getTimelinePhotos() {
            const followingUserIds = getUserByUserId(userId)
            let followedUserPhotos = []

            if(followingUserIds && followingUserIds.following.length > 0) {
                followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated)
                setPhotos(followedUserPhotos)
            }
        }

        getTimelinePhotos();
    })

    return { photos }
}