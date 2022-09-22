import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="my-10 flex flex-wrap justify-center gap-2">
      {pages.map((page, index) => 
          <button
            onClick={() => setCurrentPage(page)}
            className="btn btn-sm hover:bg-dark"
            key={index}
          >
            {page}
          </button>)}
    </div>
  );
};

export default Pagination;
