import React from "react"
import Post from "./post"
import Skeleton from "react-loading-skeleton"
import useFollowedUsersPhotos from "../hooks/use-followed-users-photos"

export default function Timeline() {
    const { photos } = useFollowedUsersPhotos()

    return (
        <div className="container col-span-2">
            {!photos ? (
                <>
                    {[...new Array(4)].map((_, index) => (<Skeleton count={1} width={320} height={400} className="mb-5" />))}
                </>
            )
                : photos && photos.length > 0 ? (
                    photos.map((content) => <Post key={content.docId} content={content} />)
                ) : (
                    <p className="text-2xl text-center">Follow people to see photos!</p>
                )}
        </div>
    )
}