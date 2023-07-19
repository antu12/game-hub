import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "740d2747e6e3419b86a929f9190f7003",
  },
});
