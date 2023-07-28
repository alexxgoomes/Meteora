import Search from '../../components/Search';
import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLink from '../HeaderLink';
import styles from './Header.module.css';
import logo from'./Logo desktop.png';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <Link to='./'>
                    <img src={logo} alt="Logo do Meteora" />
                </Link>
                <HeaderLink to='./'>
                    Home
                </HeaderLink>
                <HeaderLink to='./nossaslojas'>
                    Nossas lojas
                </HeaderLink>
                <HeaderLink to='./novidades'>
                    Novidades
                </HeaderLink>
                <HeaderLink to='./promocoes'>
                    Promoções
                </HeaderLink>
            </nav>
            <Search />
        </header>
    )
}