import axios from 'axios'
import json from '../assets/config.json';


let instance =  axios.create({
    baseURL: json.devurl
});


instance.interceptors.request.use(async(config)=>{
   

  try {  
  console.log(config);    
  return config;

  }catch(error) {

  }

}, error => {

})





instance.interceptors.response.use(async(response)=>{
   
   console.log(response);

    //instance.request(response.config);

    return response;

})



export default instance;

