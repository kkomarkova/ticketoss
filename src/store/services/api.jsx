import axios from "axios";

const instance = axios.create({
  baseURL: "https://ticketoss-api.azurewebsites.net/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
