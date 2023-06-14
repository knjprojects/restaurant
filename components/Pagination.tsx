"use client";
import { useEffect,useState
 } from "react";
import { Pagination } from "react-headless-pagination";



const [page, setPage] = useState<number>(0);

const handlePageChange = (page: number) => {
  setPage(page);
};
const Paginate=({args}:any)=>{
return (
  <>
    Current page: {page + 1}
    <Pagination
      {...args}
      currentPage={page}
      setCurrentPage={handlePageChange}
      className=""
      truncableText="..."
      truncableClassName=""
    >
      <Pagination.PrevButton className="">Previous</Pagination.PrevButton>

      <nav className="flex justify-center flex-grow">
        <ul className="flex items-center">
          <Pagination.PageButton
            activeClassName=""
            inactiveClassName=""
            className=""
          />
        </ul>
      </nav>

      <Pagination.NextButton className="">Next</Pagination.NextButton>
    </Pagination>
    </>
)}