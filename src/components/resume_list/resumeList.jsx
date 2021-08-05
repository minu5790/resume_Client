import React, { useEffect, useState } from 'react';
import ResumeItem from '../resume_item/resumeItem';
import styles from './resumeList.module.css';
import Api from '../../apis/api';

const api = new Api();
const ResumeList = () => {
    const [resumes, setResumes] = useState(null);

    useEffect(()=>{
        
        const fetchData = async () =>{

            api.popularResume().then(res=>{
                const {resume} = res.data;
                setResumes(resume);
            })
            
        }

        fetchData();
    },[])

    return (
        <div className={styles.content}>
            { !resumes ?  null : resumes.map(resume=>{
                return <ResumeItem key = {resume.key} resume = {resume}/>
            })}
        </div>
    )
}

export default ResumeList;