import React, { memo } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const User = ({ username, fullName }) => !username || !fullName ? (
    <Skeleton count={1} height={61} />
) : (
    <Link to={`/p/${username}`} className="grid grid-cols-4 gap-4 mb-4 items-center">
        <div className="flex items-center justify-between col-span-1">
            <img
                className="rounded-full w-16"
                src={`images/avatars/${username}.jpg`}
                alt="My Profile"
            />
        </div>
        <div className="col-span-3 flex flex-col justify-center ml-1">
            <p className="font-medium text-sm">{username}</p>
            <p className="text-sm">{fullName}</p>
        </div>
    </Link>
)


export default memo(User)