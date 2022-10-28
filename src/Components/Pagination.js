import React from 'react';

const Pagination = ({ totalPages, handleClick, page, handleNext, handlePrev}) => {
  const pages = [...Array(totalPages).keys()].map(number => number + 1);

  return (
    <div className="numbers">
        <button onClick={() => handlePrev(page)}> Prev </button>
      {pages.map(number => (
        <a
          key={number}
          onClick={() => handleClick(number)}
          className={`${page === number && 'active'}`}
        >
          {number}
        </a>
      ))}
      <button onClick={() => handleNext(page)}> Next </button>
    </div>
  );
};

export default Pagination;