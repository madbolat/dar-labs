import React from 'react';
import { connect } from 'react-redux';

// import UserContext from './UserContext';

function UserProfile({user}) {
    return user ? (
        <ul className="UserProfile">
            <li><b>First name:</b> {user.firstName}</li>
            <li><b>Last name:</b> {user.lastName}</li>
        </ul>
    ) : null;
}

const mapStateToProps = state => ({
    user: state.user.userData
});

export default connect(mapStateToProps)(UserProfile);