import React, {useCallback} from 'react';
import { connect } from 'react-redux';

import './Layout.css';

import UserProfile from '../user/UserProfile';
import UserForm from '../user/UserForm';

import { getUser } from '../redux/effects/user.effects';

function Sider({ userLoading, getUser }) {
    // GET USER
    const onNameChangeClick = useCallback(() => {
        getUser();
    });
    return (
        <aside className="sider">
            <div className="randomUser">
                { userLoading ? <div className="loader"><div></div><div></div><div></div><div></div></div> :  <UserProfile/>}
                <br/>
                <button onClick={onNameChangeClick} disabled={userLoading}>
                { userLoading ? 'Loading...':  'Change name'}
                </button>
            </div>
            <UserForm />
        </aside>
    );
}

const mapStateToProps = state => ({
    userLoading: state.user.loading
});

export default connect(mapStateToProps, { getUser })(Sider);