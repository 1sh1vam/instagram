import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Photos({ photos }) {
    console.log("pgoto", photos)
    return (
        <div className="border-t border-gray mt-12 pt-4">
            <div className="grid grid-cols-3 gap-8 mt-4 mb-8">
                {!photos ? (
                    <>
                        {[...new Array(9)].map((_, idx) => <Skeleton key={idx} count={1} width={320} height={320} /> )}
                    </>
                ) : photos.length > 0 && (
                    photos.map(photo => (
                        <div>
                            <img className="square" src={photo.imageSrc} alt={photo.caption} />
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}