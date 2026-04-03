import axios from "axios";

const BASE_URL="http://localhost:5015/api/v1";

const axiosInstance=axios.create();

axiosInstance.defaults.baseURL=import.meta.env.REACT_APP_BASE_URL||BASE_URL;
axiosInstance.defaults.withCredentials=true;
 
export default axiosInstance;

