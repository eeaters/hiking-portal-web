import axios from 'axios';
import {ElMessage} from "element-plus";

const request = axios.create({
    baseURL: "http://127.0.0.1:8090",
    timeout: 5000,
})

request.interceptors.response.use(response => {
    return response.data;
}, error => {
    console.log("error =>" + error)
    let status = error.response.status;
    switch (status) {
        case 404:
            ElMessage({
                type: 'error',
                message: "请求路径不存在!"
            })
            break;
        case 500 | 501 | 502 | 503 | 504 | 505:
            ElMessage({
                type: 'error',
                message: '服务器已宕机!'
            })
            break;
        case 401:
            ElMessage({
                type: 'error',
                message: '请求类型不正确!'
            })
            break;


    }
    return Promise.reject(new Error(error.message));
})
export default request;