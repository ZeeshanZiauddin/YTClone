import axios from "axios";

const API_KEY = "AIzaSyDkrCfeq-RD8JYNino-IufutloBzQNzV_A";

export const fetchAPI = async (url) => {
  const BASE_URL = "https://youtube.googleapis.com/youtube/v3/";
  const { data } = await axios.get(`${BASE_URL}${url}&key=${API_KEY}`);
  return data;
};
