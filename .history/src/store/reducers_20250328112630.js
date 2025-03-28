import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  SET_PAGE,
} from "./actions";

const initialState = {
  movies: [],
  totalResults: 0,
  currentPage: 1,
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    // API isteği başlatıldığında loading durumunu true yapıyoruz.
    case FETCH_MOVIES_REQUEST:
      return { ...state, loading: true };

    // API'den başarıyla veriler geldiyse, filmleri ve toplam sonucu state'e ekliyoruz.
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.movies, // API'den gelen film verisi
        totalResults: action.payload.totalResults, // Toplam film sayısı
      };

    // API çağrısı başarısız olursa hata mesajını state'e ekliyoruz.
    case FETCH_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // Sayfa değiştirildiğinde currentPage değerini güncelliyoruz.
    case SET_PAGE:
      return { ...state, currentPage: action.payload };

    default:
      return state;
  }
};

export default movieReducer;
