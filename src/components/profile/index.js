import React, { useReducer, useEffect } from 'react';
import { getPhotosByUserId, getUserByUserName } from '../../services/firebase';
import Header from './header';
import Photos from './photos';

const reducer = (state, newState) => ({...state, ...newState});
const initialState = {
    profile: {},
    photosCollection: null,
    followerCount: 0,
}

export default function Profile({ username }) {
    const [ {profile, photosCollection, followerCount}, dispatch ] = useReducer(
        reducer,
        initialState
    )
    
    useEffect(() => {
        async function getProfileInfoAndPhotos() {
            const [user] = await getUserByUserName(username);
            const photos = await getPhotosByUserId(user.userId);
            
            dispatch({profile: user, photosCollection: photos, followerCount: user.followers.length})
        }

        getProfileInfoAndPhotos();
    }, [])
    console.log(profile)
    return (
        <div className="maxw-975 mx-auto">
            <Header />
            <Photos photos={photosCollection}/>
        </div>
    )
}