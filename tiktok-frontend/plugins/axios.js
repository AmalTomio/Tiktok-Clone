import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  //Cuz using laravel sanctum
  axios.defaults.withCredentials = true; //use credentials for each request
  axios.defaults.baseURL = "http://localhost:8000/api"; //change this to your laravel API url
  return {
    provide: {
      axios: axios,
    },
  };
});

// const { $userStore } = useNuxtApp();
