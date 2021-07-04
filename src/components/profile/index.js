import React, { useReducer, useEffect } from 'react';
import { getPhotosByUserId, getUserByUserName } from '../../services/firebase';
import Header from './header';
import Photos from './photos';

const reducer = (state, newState) => ({...state, ...newState});
const initialState = {
    profile: {},
    photosCollection: null,
    followersCount: 0,
}

export default function Profile({ username }) {
    const [ {profile, photosCollection, followersCount}, dispatch ] = useReducer(
        reducer,
        initialState
    )
    
    useEffect(() => {
        async function getProfileInfoAndPhotos() {
            const [user] = await getUserByUserName(username);
            const photos = await getPhotosByUserId(user.userId);
            
            dispatch({profile: user, photosCollection: photos, followersCount: user.followers.length})
        }

        getProfileInfoAndPhotos();
    }, [username])
    console.log(profile)
    return (
        <div className="maxw-975 mx-auto">
            <Header 
                followersCount={followersCount} 
                photosCount={photosCollection ? photosCollection.length : 0} 
                profile={profile}
                setFollowerCount={dispatch}
                username={username}
            />
            <Photos photos={photosCollection}/>
        </div>
    )
}