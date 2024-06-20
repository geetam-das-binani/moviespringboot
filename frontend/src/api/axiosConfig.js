import axios from 'axios'

export  default axios.create({
    baseURL:"https://8c6c-152-58-177-173.ngrok-free.app",
    
    headers:{
        "ngrok-skip-browser-warning":"true",
       
    }
})