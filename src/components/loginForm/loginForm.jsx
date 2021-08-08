import React, { useState } from 'react';
import styles from "./loginForm.module.css";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const handleSubmit = async(e) =>{
        setDisabled(true);
        e.preventDefault();
        await new Promise((r) => setTimeout(r, 1000));
        setDisabled(false);
    }
    
    return(
        <section className={styles.loginContent}>
            <form  className={styles.loginForm} onSubmit={handleSubmit}>
                <h2>로그인</h2>
                <input type="email" id="email" name="email" placeholder="email typing..." value={email} autoFocus required onChange={e=>setEmail(e.target.value)}/>
                <input type="password" id="password" name="password" placeholder="password typing..."  value={password} autoFocus required onChange={e=>setPassword(e.target.value)}/>
                <input type="submit" value="로그인" disabled={disabled}/>
            </form>
        </section>
    )
}

export default LoginForm;