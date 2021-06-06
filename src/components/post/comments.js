import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddComment from './add-comment';

export default function Comments({ docId, comments: allComments, posted, commentInput }) {
    const [comments, setComments] = useState(allComments)
    return (
        <>
            <div className='p-4 pt-1'>
                {comments.length > 2 && <p className='text-sm text-gray-500 mb-1 cursor-pointer'>
                    View all comments...
                    </p>
                }

                {
                    comments.slice(0, 2).map((comment) => (
                        <p key={`${comment.comment}-${comment.displayName}`} className="mb-1">
                            <Link to={`/p/${comment.displayName}`}>
                                <span className="mr-1 font-medium">{comment.displayName}</span>
                            </Link>

                            <span>{comment.comment}</span>
                        </p>
                    ))
                }
            </div>

            <AddComment />
        </>
    )
}