import React from 'react';
import withUser from './withUser';

function UserAvatar({user}) {
    return (
        <div className="userAvatar">
            Hello, {user.firstName} {user.lastName}
        </div>
    );
}

export default withUser(UserAvatar);