import { AppContext } from "./Context";
import { useContext } from "react";
const Pagination = () => {
  const { getPrevPage, getNextPage, page, nbPages } = useContext(AppContext);
  return (
    <>
      <div className="pagination-btn">
        <button onClick={() => getPrevPage()}> Prev</button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={() => getNextPage()}>Next</button>
      </div>
    </>
  );
};
export default Pagination;
