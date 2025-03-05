import axios from "axios";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export default defineNuxtPlugin(() => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
  });

  // Attach CSRF token to every outgoing request (if available)
  axiosInstance.interceptors.request.use((config) => {
    const csrfToken = getCookie("XSRF-TOKEN");
    if (csrfToken) {
      config.headers["X-XSRF-TOKEN"] = decodeURIComponent(csrfToken);
    }
    return config;
  });

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
