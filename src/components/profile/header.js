import React, { useState, useEffect } from 'react';
import useUser from '../../hooks/use-user';
import Skeleton from 'react-loading-skeleton';
import { toggleFollow, isUserFollowingProfile } from '../../services/firebase';

export default function Header({ 
    username, 
    photosCount, 
    followersCount, 
    profile: {docId: profileDocId, userId: profileUserId, fullName, following = []}, 
    setFollowerCount,
}) {

    const [isFollowingProfile, setIsFollowingProfile] = useState(false);
    const { user } = useUser();
    const activeBtn = user.username && user.username !== username;

    const handleToggle = async (e) => {
        e.preventDefault();
        setIsFollowingProfile(prev => !prev)
        setFollowerCount({ followersCount: isFollowingProfile ? followersCount - 1 : followersCount + 1 });
        await toggleFollow(isFollowingProfile, user.docId, user.userId, profileDocId, profileUserId )
    }

    useEffect(() => {
       const isLoggedInUserFollowingProfile = async () => {
            const isFollowing = await isUserFollowingProfile(user.username, profileUserId);
            console.log('is following', isFollowing);
            setIsFollowingProfile(isFollowing)
       }
       if(user.username && profileUserId) {
           isLoggedInUserFollowingProfile()
       }
    }, [user.username, profileUserId])

    return (
        <div className="grid grid-cols-3 gap-4 mx-auto">
            <div className="container flex items-center justify-center">
                <img 
                    src={`/images/avatars/${username}.jpg`} 
                    className="rounded-full h-40 w-40" 
                />
            </div>
            <div className="flex items-center justify-center flex-col col-span-2">
                <div className="container flex items-center">
                    <p className="text-2xl mr-4 font-light">{username}</p>
                    {activeBtn && 
                        <button 
                            onClick={handleToggle}
                            type="button"
                            className="bg-blue-500 font-medium text-sm rounded text-white w-20 h-8 focus:outline-none"
                        >{isFollowingProfile ? 'Unfollow': 'Follow'}</button>
                    }
                </div>
                <div className="container flex mt-4">
                    {followersCount === undefined || following === undefined ? (
                        <Skeleton count={1} width={667} height={30} />
                    ) : (
                        <>
                            <p className="mr-4">
                                <span className="font-medium">{photosCount}</span> posts
                            </p>
                            <p className="mr-4">
                                <span className="font-medium">{followersCount}</span>{' '}
                                {followersCount < 2 ? 'follower' : 'followers'}
                            </p>
                            <p className="mr-4">
                                <span className="font-medium">{following.length}</span> following
                            </p>
                        </>
                    )}
                </div>
                <div className="container mt-4">
                    <p className="font-medium">{fullName ? fullName : <Skeleton count={1} height={24} /> }</p>
                </div>
            </div>
        </div>
    )
}