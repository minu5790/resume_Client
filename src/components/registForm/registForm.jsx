import React from 'react';

import styles from './registForm.module.css'
const RegistForm = () =>{
    return (
        <section className={styles.registContent}>
            <form className={styles.registForm}>
                <label for="email"><h3>이메일</h3></label>
                <span><input type="email" id="email" name="email" placeholder="email typing..." autoFocus required /></span>

                <label for="password"><h3>패스워드</h3></label>
                <span><input type="password" id="password" name="password" placeholder="password typing..."  required /></span>

                <label for="phoneNumber"><h3>휴대전화</h3></label>
                <span><input type="tel" id="tel" name="phoneNumber" placeholder="번호 입력..."   required /></span>

                <label for="nickName"><h3>닉네임</h3></label>
                <span><input type="text" id="nickName" name="nickName" placeholder="닉네임 입력..."  required /></span>

                <input className={styles.registSumbit} type="submit" value="회원가입" />
            </form>
        </section>
    )
}

export default RegistForm;