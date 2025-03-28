import axios from "axios";

const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (text = "pokemon", page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        t: text,
        page: page,
      },
    });
    return response.data.Search;
  } catch (error) {
    console.error("Film arama hatası:", error);
    return [];
  }
};

export const getMovieDetails = async (movieID) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        i: movieID,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Film detaylarını getirme hatası:", error);
    return null;
  }
};
