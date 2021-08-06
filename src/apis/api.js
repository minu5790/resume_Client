import axios from 'axios';

class Api {
    
    constructor(){

    }

    async popularResume(){ 

        const data =await axios.get(`https://minu5790.github.io/resume_Client/mockData.json`).catch(Error=>console.log(Error));

        return data;
    }
}

export default Api;