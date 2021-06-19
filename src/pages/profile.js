import React from "react";
import { useParams, useHistory } from "react-router";
import Header from "../components/header";
import UserProfile from '../components/profile';


export default function Profile() {
    const { username } = useParams();
    const history = useHistory();

    return (
        <div className="bg-gray">
            <Header />
            <UserProfile />
        </div>
    )
}