import React from 'react';
import styles from "./resumeItem.module.css";

const ResumeItem = ({resume}) => {

    return(
        <>
            <ul className={styles.resumeItem}>
                <li>닉네임 : {resume.nickName}</li>
                <li>기술스택 : {resume.stack}</li>
                <li>경력 : {resume.career}</li>
            </ul>
        </>
    )
}

export default ResumeItem;