import React from 'react';
import './Sider.css';
import UserProfile from '../user/UserProfile';

export default function Sider({children}) {
    return (
        <aside className="sider">
            {children}
            <UserProfile/>
        </aside>
    );
}