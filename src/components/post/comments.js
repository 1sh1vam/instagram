import React, { useState } from 'react';

export default function Comments({ docId, comments: allComments, posted, commentInput }) {
    const [comments, setComments] = useState(allComments)
    return (
        <>
            <div className='p-4 pt-1'>
                {comments.length > 2 && <p className='text-sm text-gray-500 mb-1 cursor-pointer'>
                    View all comments...
                    </p>}
            </div>
        </>
    )
}