import React from 'react';
import Image from './image';
import Footer from './footer';

export default function Post({ content }) {

    return (
        <div className="rounded mb-16 bg-white border">
            <Image src={content.imageSrc} caption={content.caption} />
            <Footer caption={content.caption} username={content.username} />
        </div>
    )
}