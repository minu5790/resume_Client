import client from "./client";

export const login = ({email, password})=> client.post('apis/auth/login',{email,password});

export const register = ({email, password, phoneNumber, nickName})=> client.post('apis/auth/register',{email, password, phoneNumber, nickName});

