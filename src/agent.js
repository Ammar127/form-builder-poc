import axios from "axios";

const API_ROOT = "http://127.0.0.1:3000";

const responseBody = (res) => res.data;

const headerPlugin = () => {
  let head = { headers: {} };
    head.headers["Content-Type"] = "application/json";
  return head;
};

const requests = {
  del: (url) =>
    axios.delete(`${API_ROOT}${url}`, headerPlugin()).then(responseBody),
  get: (url) =>
    axios.get(`${API_ROOT}${url}`, headerPlugin()).then(responseBody),
  put: (url, body) =>
    axios.put(`${API_ROOT}${url}`, body, headerPlugin()).then(responseBody),
  post: (url, body) =>
    axios.post(`${API_ROOT}${url}`, body, headerPlugin()).then(responseBody),
};

 
const Form = {
  post: (value) => requests.post("/api/form", value),
  put: (id, value) => requests.put(`/api/form/${id}`, value),
  getAll: () => requests.get("/api/form"),
  getById: (id) => requests.get(`/api/form/${id}`),
  del: (id) => requests.del(`/api/form/${id}`),
};

 

export default {
  Form: Form,
};
