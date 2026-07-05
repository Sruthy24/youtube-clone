import axios from "axios";
import { API_KEY, BASE_URL } from "./constants";

const api = axios.create({
  baseURL: BASE_URL,
});

// Search videos
export const searchVideos = async (query) => {
  const { data } = await api.get("/search", {
    params: {
      part: "snippet",
      maxResults: 20,
      q: query,
      type: "video",
      key: API_KEY,
    },
  });

  return data.items;
};

// Get video details
export const getVideoDetails = async (id) => {
  const { data } = await api.get("/videos", {
    params: {
      part: "snippet,statistics",
      id,
      key: API_KEY,
    },
  });

  return data.items[0];
};

// Get related videos
export const getRelatedVideos = async (id) => {
  const { data } = await api.get("/search", {
    params: {
      part: "snippet",
      relatedToVideoId: id,
      type: "video",
      maxResults: 15,
      key: API_KEY,
    },
  });

  return data.items;
};
