import { createAction,  handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';

import creatRequestSaga,{ createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../apis/auth';

const CHANGE_FILED = 'auth/CHANGE_FILED';
const INIT_FORM = 'auth/INIT_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =createRequestActionTypes('auth/REGISTER');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');

export const changeFiled = createAction(
    CHANGE_FILED,
    ({form,key, value})=>({
        form,
        key,
        value
    }),
)
export const initForm = createAction(INIT_FORM, form => form);

export const login = createAction(LOGIN, ({username, password})=>({
    username,
    password
}))

export const register = createAction(REGISTER, ({username, password, phoneNumber, nickName})=>({
    username,
    password,
    phoneNumber,
    nickName
}))

// 사가 생성
const registerSaga = creatRequestSaga(REGISTER, authAPI.register);
const loginSaga =  creatRequestSaga(LOGIN, authAPI.login);
export function* authSaga(){
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
};

const initState = {
    login:{
        email:'',
        password:'',
    },
    register:{
        email:'',
        password:'',
        phoneNumber:'',
        nickName:''
    },
    auth: null,
    authError: null
};

const auth = handleActions(
    {
        [CHANGE_FILED]: (state, {payload: {form,key, value}}) => 
        produce(state, draft =>{
            draft[form][key] = value;
        }),
        [INIT_FORM]: (state, {payload: form})=>({
            ...state,
            [form]: initState[form]
        }),
        [REGISTER_SUCCESS]: (state, {payload: auth})=>({
            ...state,
            authError: null,
            auth
        }),
        [REGISTER_FAILURE]: (state, {payload: error})=>({
            ...state,
            authError: error
        }),
        [LOGIN_SUCCESS]: (state, {payload: auth})=>({
            ...state,
            authError: null,
            auth
        }),
        [LOGIN_FAILURE]: (state, {payload: error})=>({
            ...state,
            authError: error
        }),
    },
    initState
)

export default auth;