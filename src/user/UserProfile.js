import React from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';

// import UserContext from './UserContext';

function UserProfile({user}) {
    return user ? (
        <List size="small">
            <List.Item><b>First name:</b> {user.firstName}</List.Item>
            <List.Item><b>Last name:</b> {user.lastName}</List.Item>
        </List>
    ) : null;
}

const mapStateToProps = state => ({
    user: state.user.userData
});

export default connect(mapStateToProps)(UserProfile);