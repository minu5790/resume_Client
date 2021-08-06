import React, { memo } from 'react';

import styles from "./header.module.css";

const Header =memo (() => {
    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="/" className={styles.brand}>
                    <h1>Resume</h1>
                </a>

                <div className={styles.menu}>
                    <a href="/signin" className={styles.loginButton}>
                        로그인
                    </a>
                    <a href="/signup" className={styles.signupButton}>
                        회원가입
                    </a>
                </div>
            </div>

        </header>

    )
})

export default Header;
