import axios from "axios";

const API = axios.create({
  baseURL: "https://contact-management-oo99.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
