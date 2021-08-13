import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../../components/loginForm/loginForm';

import { changeFiled, initForm } from '../../modules/auth';

const LoginContainer = () =>{
    const dispatch = useDispatch();
    const {form} = useSelector(({auth})=>({
        form: auth.login
    }));

    const onChange = event =>{
        const {value, name} =  event.target;
        dispatch(changeFiled({
            form:'login',
            key:name,
            value
        }))
    }

    const onSubmit = event =>{
        event.preventDefault();
    }

    useEffect(()=>{
        dispatch(initForm('login'));
    },[dispatch]);

    return(
        <LoginForm form={form} onChange={onChange} onSubmit={onSubmit}/>
    )
}

export default LoginContainer;