import React, { useState } from 'react';

export default function AddComment({ docId, setComments, commentInput }) {
    const [comment, setComment] = useState('');

    return (
        <div className="border-t border-gray">
            <form method="POST"
                className="w-full flex items-center justify-between pr-5"
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