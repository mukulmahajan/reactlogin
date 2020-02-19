import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = () => {

    return (
        <div className={styles.container}>
            <div className={styles.itemContainer}>
            <Link className={styles.item} to={'/register'}>Register</Link>
            <Link className={styles.item} to={'/login'}>Login</Link>
            <Link className={styles.item} to={'/products'}>Products</Link>
            <Link className={styles.item} to={'/add/address'}>Add Address</Link>
            <Link className={styles.item} to={'/address'}>Addresses</Link>
        </div>
        </div>
    );
}


export default Navbar
