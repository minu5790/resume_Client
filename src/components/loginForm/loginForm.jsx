import React from 'react';
import styles from "./loginForm.module.css";

const LoginForm = () => {
    return(
        <section className={styles.loginContent}>
            <form className={styles.loginForm} >
                <h2>로그인</h2>
                <input type="email" id="email" name="email" placeholder="email typing..." autoFocus required />
                <input type="password" id="password" name="password" placeholder="password typing..." autoFocus required />
                <input type="submit" value="로그인"/>
            </form>
        </section>
    )
}

export default LoginForm;