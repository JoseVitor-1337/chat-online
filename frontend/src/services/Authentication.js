import axios from "axios";

const AccountService = axios.create({
  responseType: "json",
  baseURL: "http://localhost:3333",
});

export default AccountService;
