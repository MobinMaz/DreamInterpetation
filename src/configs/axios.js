import axios from "axios";
const api = axios.create({ baseURL: "https://api.dreamscatcher.ir/api" });
export default api;