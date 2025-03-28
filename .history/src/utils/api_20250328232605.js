import axios from "axios";

const API_KEY = "df54e6ed";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (text, page, type, year) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: text,
        y: year,
        type: type,
        page: page,
      },
    });
    return response.data;
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
