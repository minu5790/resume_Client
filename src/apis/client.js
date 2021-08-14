import axios from 'axios';

//axios 인스턴스

const client = axios.create();

client.defaults.baseURL="https://minu5790.github.io/";

export default client;