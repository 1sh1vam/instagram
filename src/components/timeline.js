import React from "react"
import Skeleton from "react-loading-skeleton"
import useFollowedUsersPhotos from "../hooks/use-followed-users-photos"

export default function Timeline() {
    const { photos } = useFollowedUsersPhotos()

    return (
        <div>
            {!photos ? (
                <Skeleton count={4} width={640} height={500} className="mb-5"/>
            )
            :(
                photos.map((photo) => <p>I am the photo</p>)
            )}
        </div>
    )
}