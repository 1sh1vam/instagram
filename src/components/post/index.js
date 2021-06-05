import React from 'react';
import Image from './image';

export default function Post({ content }) {

    return (
        <div className="rounded mb-16 bg-white border">
            <Image src={content.imageSrc} caption={content.caption} />
        </div>
    )
}