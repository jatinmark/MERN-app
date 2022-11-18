import axios from 'axios'

const instance = axios.create({
  baseURL : "https://enigmatic-forest-76626.herokuapp.com" 
});

const url = 'https://enigmatic-forest-76626.herokuapp.com';

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

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log('Error while calling setConversation API ', error);
    }
}

export default instance ;

// https://enigmatic-forest-76626.herokuapp.com