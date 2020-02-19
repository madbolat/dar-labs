import React from 'react';
import UserContext from './UserContext';

export default function UserProfile() {
    return (
        <UserContext.Consumer>
            {user => (
                <ul>
                    <li>First name: {user.firstName}</li>
                    <li>Last name: {user.lastName}</li>
                </ul>
            )}
        </UserContext.Consumer>
    )
}