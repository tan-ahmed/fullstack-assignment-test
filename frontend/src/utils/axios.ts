import axios from "axios";
axios.defaults.baseURL = "http://localhost:8001/";

export const Get = (url: string) => axios.get(url).then((res) => res.data);
