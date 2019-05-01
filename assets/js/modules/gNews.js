import axios from 'axios';
const apiKey = "931302aeb87b49f5bfaff8bad5b4d957";

export default axios.create({
  method: "get",
  baseURL: "https://newsapi.org/v2",
  params: {
    pageSize: 6
  },
  headers: {
    Authorization: apiKey
  }
});