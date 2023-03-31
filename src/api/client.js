import axios from "axios";
import { toast } from "react-toastify";

// something devopsy here
const domainUrl = process.env.DOMAIN_URL || "http://localhost:3002";
// const domainUrl =
//   process.env.DOMAIN_URL || "https://long-erin-duckling-cuff.cyclic.app";

const client = axios.create({
  withCredentials: true,
  // Means this URL is mostly user in calling API from frontend
  baseURL: `${domainUrl}/api/v1`,
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },

  //   baseURL: "https://stormy-dusk-68006.herokuapp.com/api/v1",
});
const normalClient = axios.create({
  baseURL: `${domainUrl}/api/v1`,
});
normalClient.interceptors.response.use(null, (error) => {
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
const Imageclient = `${domainUrl}/img`;
const chatUrl = "http://localhost:3002";
export { client, Imageclient, normalClient, chatUrl };
