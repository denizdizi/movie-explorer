import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../store/actions";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, totalResults } = useSelector((state) => state);
  const totalPages = Math.ceil(totalResults / 10);

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Önceki
      </button>
      <span>Sayfa {currentPage} / {totalPages}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Sonraki
      </button>
    </div>
  );
};

export default Pagination;
