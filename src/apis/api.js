import axios from 'axios';

class Api {
    
    constructor(){

    }

    async popularResume(){ 

        const data =await axios.get(`http://localhost:3000/mockData.json`).catch(Error=>console.log(Error));

        return data;
    }
}

export default Api;