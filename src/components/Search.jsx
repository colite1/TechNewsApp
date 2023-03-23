import { AppContext } from "./Context";
import { useContext } from "react";
const Search = () => {
  const { searchStorie, query } = useContext(AppContext);
  return (
    <>
      <h1>Tech Forum</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            placeholder="Search"
            value={query}
            onChange={(e) => searchStorie(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};
export default Search;
