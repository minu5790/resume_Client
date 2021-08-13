import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RegistForm from '../../components/registForm/registForm';
import { changeFiled, initForm } from '../../modules/auth';

const RegistContainer = () =>{
    const dispatch = useDispatch();
    const {form} = useSelector(({auth})=>({
        form: auth.register
    }));

    const onChange = event =>{
        const {value, name} =  event.target;
        console.log(event.target.name)
        dispatch(changeFiled({
            form:'register',
            key:name,
            value
        }))
    }

    const onSubmit = event =>{
        event.preventDefault();
    }

    useEffect(()=>{
        dispatch(initForm('register'));
    },[dispatch]);

    return(
        <RegistForm form={form} onChange={onChange} onSubmit={onSubmit}/>
    )
}

export default RegistContainer;