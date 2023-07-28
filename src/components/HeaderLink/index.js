import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderLink.module.css';

export default function HeaderLink({ children, to }) {
    return (
        <NavLink
            className={styles.link}
            to={to}
        >
            {children}
        </NavLink>
    )
}