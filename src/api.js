import axios from "axios";
import {BaseUrl} from "./const/common";

const createAPI = () => {
  const api = axios.create({
    baseURL: `${BaseUrl.BASE}${BaseUrl.PATH_WTW}`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
