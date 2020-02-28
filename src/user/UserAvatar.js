import React from 'react';
import { connect } from 'react-redux';

// import withUser from './withUser';

function UserAvatar({user}) {
    return user ? (
        <div className="userAvatar">
            Hello, {user.firstName} {user.lastName}
        </div>
    ) : null;
}

const mapStateToProps = state => ({
    user: state.user.userData
});

export default connect(mapStateToProps)(UserAvatar);