import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Typography } from 'antd';
import { blue } from '@ant-design/colors';

// import withUser from './withUser';

function UserAvatar({user}) {
    return user ? (
        <Typography.Title 
            level={2}  
            style={{color: blue[0]}}
        >
            Hello, {user.firstName} {user.lastName}
        </Typography.Title>
    ) : null;
}

const mapStateToProps = state => ({
    user: state.user.userData
});

export default withRouter(connect(mapStateToProps)(UserAvatar));