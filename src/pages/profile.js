import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import Header from "../components/header";
import UserProfile from '../components/profile';
import * as ROUTES from '../constants/routes';
import { getUserByUserName } from '../services/firebase';

export default function Profile() {
    const { username } = useParams();
    const [userExists, setUserExists] = useState(undefined);
    const history = useHistory();

    useEffect(() => {
        async function checkUserExistsToLoadProfile() {
            const doesUserExist = await getUserByUserName(username);
            if (!doesUserExist) {
                history.push(ROUTES.NOT_FOUND);
            } else {
                setUserExists(true);
            }
        }
        checkUserExistsToLoadProfile();
    }, [username, history])

    return userExists ? (
        <div className="bg-gray">
            <Header />
            <UserProfile username={username} />
        </div>
    ) : null
}