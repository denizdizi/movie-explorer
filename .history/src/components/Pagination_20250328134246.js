import React from "react";

const Pagination = ({currentPage, totalResults, onPageChange}) => {
  const totalPages = Math.ceil(totalResults / 10);

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
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
