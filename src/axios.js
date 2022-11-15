import axios from 'axios'

const instance = axios.create({
  baseURL : "https://9000-jatinmark-mernapp-8dmdyn7fsxk.ws-us75.gitpod.io" 
});

const url = 'https://9000-jatinmark-mernapp-8dmdyn7fsxk.ws-us75.gitpod.io';

export const addUser = async (data) => {
    try {
        let response = await axios.post(`${url}/add`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
}

export const getUsers = async ()=>{
    try{
        let response = await axios.get(`${url}/users`);
        console.log(response);
        return response.data ;
    }catch(error){
        console.log('error while calling getusers' , error.message);
  }
}

export default instance ;

// https://stark-plains-39250.herokuapp.com