import React from 'react';

import styles from './registForm.module.css'

const RegistForm = ({form,onChange,onSubmit}) =>{
    return (
        <section className={styles.registContent}>
            <form className={styles.registForm} onSubmit={onSubmit}>
                <label><h3>이메일</h3></label>
                <span><input type="email" id="email" name="email" placeholder="email typing..." value={form.email} autoFocus required onChange={onChange}/></span>

                <label><h3>패스워드</h3></label>
                <span><input type="password" id="password" name="password" placeholder="password typing..."  value={form.password} required onChange={onChange}/></span>

                <label><h3>휴대전화</h3></label>
                <span><input type="tel" id="tel" name="phoneNumber" placeholder="번호 입력..."  value={form.phoneNumber} required onChange={onChange}/></span>

                <label><h3>닉네임</h3></label>
                <span><input type="text" id="nickName" name="nickName" placeholder="닉네임 입력..."  value={form.nickName} required onChange={onChange} /></span>

                <input className={styles.registSumbit} type="submit" value="회원가입" />
            </form>
        </section>
    )
}

export default RegistForm;