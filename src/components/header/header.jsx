import React from 'react';

import styles from "./header.module.css";

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="localhost:3000" className={styles.brand}>
                    <h1>Resume</h1>
                </a>

                <div className={styles.menu}>
                    <a href="#" className={styles.loginButton}>
                        로그인
                    </a>
                    <a href="#" className={styles.signupButton}>
                        회원가입
                    </a>
                </div>
            </div>

        </header>

    )
}

export default Header;
