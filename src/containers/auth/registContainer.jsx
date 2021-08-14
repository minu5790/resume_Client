import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RegistForm from '../../components/registForm/registForm';
import { changeFiled, initForm, register } from '../../modules/auth';

const RegistContainer = () =>{
    const dispatch = useDispatch();
    const {form, auth, authError} = useSelector(({auth})=>({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError
    }));

    const onChange = event =>{
        const {value, name} =  event.target;

        dispatch(changeFiled({
            form:'register',
            key:name,
            value
        }))
    }

    const onSubmit = event =>{
        event.preventDefault();
        const {email, password, phoneNumber, nickName} = form;
        
        dispatch(register({email, password, phoneNumber, nickName}));
    }

    useEffect(()=>{
        dispatch(initForm('register'));
    },[dispatch]);


    useEffect(()=>{
        if(authError){
            console.log('오류!!');
            console.log(authError);
            return;
        }
        if(auth){
            console.log("가입 성공");
            console.log(auth);
        }
    },[auth, authError])
    return(
        <RegistForm form={form} onChange={onChange} onSubmit={onSubmit}/>
    )
}

export default RegistContainer;