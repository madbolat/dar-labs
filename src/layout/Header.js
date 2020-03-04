import React from 'react';
import { Layout } from 'antd';

export default function Header(props) {
    return (
        <Layout.Header>
            {props.children}
        </Layout.Header>
    );
}