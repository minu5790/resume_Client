import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import styles from './header.module.css';

const Header =memo (() => {
    return(
        <header className={styles.header}>
            <div className={styles.container}>

                <Link to="/" className={styles.brand}>
                    <h1>Resume</h1>
                </Link>

                <div className={styles.menu}>
                    <Link to="/signin" className={styles.loginButton}>
                        로그인
                    </Link>
                    <Link to="/signup" className={styles.signupButton}>
                        회원가입
                    </Link>
                </div>
            </div>

        </header>

    )
})

export default Header;
