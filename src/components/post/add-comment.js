import React, { useState, useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

export default function AddComment({ docId, setComments, commentInput }) {
    const [comment, setComment] = useState('');
    const { firebase, FieldValue } = useContext(FirebaseContext);
    const {
        user: { displayName }
    } = useContext(UserContext);

    const handleCommentSubmit = async (event) => {
        event.preventDefault();
        setComments(prev => [{ comment, displayName }, ...prev]);
        setComment('');

        console.log(comment)

        return firebase
            .firestore()
            .collection('photos')
            .doc(docId)
            .update({
                comments: FieldValue.arrayUnion({ displayName, comment })
            })
    }


    return (
        <div className="border-t border-gray">
            <form method="POST"
                className="w-full flex items-center justify-between pr-5"
                onSubmit={handleCommentSubmit}
            >
                <input
                    type="text"
                    className="w-full border-none focus:outline-none py-4 px-4"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={({ target }) => setComment(target.value)}
                />

                <button type="submit"
                    className={`text-sm font-medium text-blue-500 ${!comment && "opacity-25"}`}
                >
                    Post
                </button>
            </form>
        </div>
    )
}