import axios from "axios"

export default axios.create({
  baseURL: "https://synkify-api.onrender.com/api/v1/auth",
});