import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/malishben360/vue-form/git",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  postEvent(event) {
    return apiClient.post("events", event);
  },
};
