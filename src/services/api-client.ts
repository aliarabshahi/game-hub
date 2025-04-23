import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1b36991d94114a27aa1a87503c95e1bb",
  },
});
