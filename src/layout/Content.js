import React from 'react';
import { Layout } from 'antd';

export default function Content({children}) {
    return (
        <Layout>
            {children}
        </Layout>
    );
}