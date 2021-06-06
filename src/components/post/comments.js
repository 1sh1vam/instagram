import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDistance } from 'date-fns';
import AddComment from './add-comment';

export default function Comments({ docId, comments: allComments, posted, commentInput }) {
    const [comments, setComments] = useState(allComments)
    return (
        <>
            <div className='p-4 pt-1 pb-3'>
                {comments.length > 2 && <p className='text-sm text-gray-500 mb-1 cursor-pointer'>
                    View all {comments.length} comments...
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
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                    {formatDistance(posted, new Date())} ago
                </p>
            </div>

            <AddComment
                docId={docId}
                setComments={setComments}
                commentInput={commentInput}
            />
        </>
    )
}