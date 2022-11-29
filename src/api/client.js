import axios from "axios";
import { toast } from "react-toastify";

const client = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3002/api/v1",

  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },

  //   baseURL: "https://stormy-dusk-68006.herokuapp.com/api/v1",
});
client.interceptors.response.use(null, (error) => {
  const expecteError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expecteError) {
    console.log(
      "An unexpected error occured, maybe see response in networking in dev mode"
    );
    toast.error("An unexpected error occured");
  }
  return Promise.reject(error);
});
// const Imageclient = "http://localhost:3001/img";
const Imageclient = "https://stormy-dusk-68006.herokuapp.com/img";
export { client, Imageclient };
