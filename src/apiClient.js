import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;


const apiClient = () => {
  const instance = axios.create({
    withCredentials: true,
    baseURL
  });

  // Function that will be called to refresh authorization
  // TODO: replace proper refresh token url
  const refreshAuthLogic = (request) =>
    axios
      .post(`${baseURL}/token/refresh/`, { refresh: sessionStorage.getItem('refresh') })
      .then((response) => {
        request.response.config.headers.Authorization = `Bearer ${response.data.access}`;
        sessionStorage.setItem('access', response.data.access);
        return Promise.resolve();
      })
      .catch(() => {
        sessionStorage.removeItem('access');
        sessionStorage.removeItem('refresh');
        return Promise.reject();
      });

  // Instantiate the interceptor (you can chain it as it returns the axios instance)
  createAuthRefreshInterceptor(instance, refreshAuthLogic);

  // Obtain the fresh token each time the function is called
  function getAccessToken() {
    return sessionStorage.getItem('access');
  }

  // Use interceptor to inject the token to requests
  instance.interceptors.request.use((request) => {
    request.headers['Content-Type'] = 'application/json';
    if (getAccessToken()) {
      request.headers.Authorization = `Bearer ${getAccessToken()}`;
    }
    return request;
  });

  return instance;
};

export default apiClient;
