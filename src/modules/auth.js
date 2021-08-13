import { createAction,  handleActions } from 'redux-actions';
import produce from 'immer';


const CHANGE_FILED = 'auth/CHANGE_FILED';
const INIT_FORM = 'auth/INIT_FORM';

export const changeFiled = createAction(
    CHANGE_FILED,
    ({form,key, value})=>({
        form,
        key,
        value
    }),
)
export const initForm = createAction(INIT_FORM, form => form);

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
    }
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
        })
    },
    initState
)

export default auth;