import React, {useCallback} from 'react';
import { connect } from 'react-redux';
import { Button, Card, Spin, Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';

import UserProfile from '../user/UserProfile';
import UserForm from '../user/UserForm';
import { getUser } from '../redux/effects/user.effects';

function Sider({ children, userLoading, getUser }) {
    // GET USER
    const onNameChangeClick = useCallback(() => {
        getUser();
    });
    return (
        <Layout.Sider width={250} theme="light">
            <Card>
                { userLoading ? <Spin size="large"><UserProfile /></Spin> :  <UserProfile /> }
                <br/>
                <Button 
                    onClick={onNameChangeClick} 
                    type="primary" 
                    shape="round" 
                    size={'large'} 
                    loading={userLoading}
                    block>
                { userLoading ? 'Loading...':  'Change name'}
                </Button>
            </Card>
            {children}
        </Layout.Sider>
    );
}

const mapStateToProps = state => ({
    userLoading: state.user.loading
});

export default connect(mapStateToProps, { getUser })(Sider);