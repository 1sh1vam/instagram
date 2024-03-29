import React, { useState, useEffect, useContext } from 'react';
import FirebaseContext from "../../context/firebase"
import UserContext from "../../context/user"

export default function Actions({ docId, totalLikes, likedPhoto, handleFocus }) {
    const [toggleLiked, setToggledLiked] = useState(likedPhoto)
    const [likes, setLikes] = useState(totalLikes)
    const { firebase, FieldValue } = useContext(FirebaseContext)
    const { user: { uid: userId = '' } } = useContext(UserContext)

    const handleToggleLiked = async () => {
        setToggledLiked(prev => !prev)

        await firebase
            .firestore()
            .collection('photos')
            .doc(docId)
            .update({
                likes: toggleLiked ? FieldValue.arrayRemove(userId) : FieldValue.arrayUnion(userId)
            });

        setLikes(prev => toggleLiked ? prev - 1 : prev + 1);
    }

    return (
        <>
            <div className="flex justify-betweeen p-4 pb-0">
                <div className="flex">
                    <svg aria-label="Unlike" class="_8-yf5 "
                        fill={toggleLiked ? "#ed4956" : "#262626"} height="24"
                        viewBox="0 0 48 48" width="24"
                        onClick={handleToggleLiked}
                        onKeyDown={(event) => {
                            if (event.key === 'enter') {
                                handleToggleLiked()
                            }
                        }}
                        className="cursor-pointer"
                    >
                        {
                            toggleLiked ? <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                : <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                        }
                    </svg>

                    <svg aria-label="Comment" class="_8-yf5 " fill="#262626"
                        height="24" viewBox="0 0 48 48" width="24"
                        className="cursor-pointer ml-4"
                        onClick={handleFocus}
                        onKeyDown={(event) => {
                            if (event.key === 'enter') {
                                handleFocus();
                            }
                        }}
                    >
                        <path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path>
                    </svg>
                </div>
            </div>

            <div className="p-4 pt-2 py-0">
                <p className="font-medium">{likes <= 1 ? `${likes} like` : `${likes} likes`}</p>
            </div>
        </>
    )
}