import axios from "axios";

const instance = axios.create({
  baseURL: "https://ticketoss-api.azurewebsites.net/api",
  mode: 'no-cors',
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
