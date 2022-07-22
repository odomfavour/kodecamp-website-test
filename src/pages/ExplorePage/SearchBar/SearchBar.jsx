import "./searchbar.css";
import { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
function SearchBar() {
  const { setSearchValue } = useContext(SearchContext);
  return (
    <>
      <div className="container">
        <div className="row height d-flex justify-content-start align-items-center">
          <div className="col-md-8">
            <div className="search">
              <input
                type="text"
                className="form-control searchbar-fs-20-500 fw-normal ps-5"
                placeholder=" Search for courses"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
