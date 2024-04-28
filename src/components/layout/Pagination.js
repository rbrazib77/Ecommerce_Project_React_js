import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className="md:w-[32%]">
            <Product
              className="!important w-full"
              src="assets/p_3.png"
              badge={true}
            />
          </div>
        ))}
    </>
  );
}
const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="md:flex md:flex-wrap md:justify-between">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousClassName="hidden"
        nextClassName="hidden"
        breakClassName="mt-4"
        containerClassName="flex flex-wrap gap-y-3.5 md:gap-y-0 gap-x-3.5 mt-12"
        pageClassName="inline-block border border-solid border-[#F0F0F0F0] font-dm py-2 px-3.5 font-regular font-sm"
        activeClassName="inline-block border border-solid border-[#F0F0F0F0] font-dm py-2 px-3.5 font-regular font-sm bg-black text-white"
        renderOnZeroPageCount={null}
      />
      <p className="font-sm font-regular mt-2.5 font-dm text-[#767676] md:absolute md:bottom-0 md:right-0 md:mt-0">
        Product form {itemOffset} to {itemOffset + itemsPerPage} of{" "}
        {items.length}
      </p>
    </>
  );
};

export default Pagination;
