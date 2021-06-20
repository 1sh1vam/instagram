import React, { useReducer, useEffect } from 'react';
import { getUserByUserName } from '../../services/firebase';
import Header from './header';
import Photos from './photos';

const reducer = (state, newState) => ({...state, ...newState});
const initialState = {
    profile: {},
    photosCollection: [],
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
            console.log("userr", user);
        }

        getProfileInfoAndPhotos();
    })

    return (
        <>
            <Header />
            <Photos />
        </>
    )
}