import axios from "axios";

const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query = "pokemon", type = "", year = "") => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: query,
        type: type,
        y: year,
      },
    });
    return response.data.Search; // Film listesini döndür
  } catch (error) {
    console.error("Film arama hatası:", error);
    return [];
  }
};

export const getMovieDetails = async (imdbID) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        i: imdbID,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Film detaylarını getirme hatası:", error);
    return null;
  }
};
