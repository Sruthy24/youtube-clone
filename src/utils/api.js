import axios from "axios";
import { API_KEY, BASE_URL } from "./constants";

export const fetchVideos = async (query) => {

  const { data } = await axios.get(
    `${BASE_URL}/search`,
    {
      params: {
        part: "snippet",
        maxResults: 20,
        q: query,
        type: "video",
        key: API_KEY
      }
    }
  );

  return data;
};
