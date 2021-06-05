import React, { useRef } from 'react';
import Image from './image';
import Footer from './footer';
import Actions from './actions';
import Header from './header';

export default function Post({ content }) {
    const commentInput = useRef(null);
    const handleFocus = () => commentInput.current.focus();

    return (
        <div className="rounded mb-16 bg-white border">
            <Header username={content.username} />
            <Image src={content.imageSrc} caption={content.caption} />
            <Actions
                docId={content.docId}
                totalLikes={content.likes.length}
                likedPhoto={content.userLikedPhoto}
                handleFocus={handleFocus}
            />
            <Footer caption={content.caption} username={content.username} />
        </div>
    )
}