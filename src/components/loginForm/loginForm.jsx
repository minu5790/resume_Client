import React from 'react';

import styles from './loginForm.module.css';

const LoginForm = ({form,onChange,onSubmit}) => {

    
    return(
        <section className={styles.loginContent}>
            <form  className={styles.loginForm} onSubmit={onSubmit}>
                <h2>로그인</h2>
                <input type="email" id="email" name="email" placeholder="email typing..." value={form.email} autoFocus required onChange={onChange}/>
                <input type="password" id="password" name="password" placeholder="password typing..."  value={form.password} required onChange={onChange}/>
                <input type="submit" value="로그인" />
            </form>
        </section>
    )
}

export default LoginForm;