import React from 'react';
import './Layout.css';

export default function Header(props) {
    return (
        <header className="header">
            {props.children}
        </header>
    );
}