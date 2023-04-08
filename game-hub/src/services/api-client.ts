import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e31b55ed4b6a43e0b257b1a6573bfd9b",
  },
});
