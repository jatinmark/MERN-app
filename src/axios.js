import axios from 'axios'

// const instance = axios.create({
//   baseURL : "http://localhost:9000" 
// });

const url = 'https://messenger-app-backend-gkftm4epo-jatinmark.vercel.app';

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
export const getConversation = async (data) => {
    try {
       let res =  await axios.post(`${url}/conversation/get`, data);
        return res.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error);
    }
}

export const newMessage = async (data) => {
    try {
      await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log('Error while calling newMessage API ', error);
    }
}

export const getMessages = async (id)=>{
    try{
        let response = await axios.get(`${url}/message/get/${id}`);
        console.log(response);
        return response.data ;
    }catch(error){
        console.log('error while calling getMessages' , error.message);
  }
}

export const uploadFile = async(Data) =>{
try{
 return  await axios.post(`${url}/file/upload`, Data);
}catch(error){
  console.log('error while calling uploadfile api' , error.message)
}
}



// export default instance ;

