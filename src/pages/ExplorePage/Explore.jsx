import { useState } from "react";
import PageWrapper from "../../layout/PageWapper/PageWrapper";
import ExploreDesktop from "./ExploreDesktop";
import ExploreMobile from "./ExploreMobile";
import "../../App.css";
import "./Explore.css";
// import SearchBar fro./SearchBar/SearchBarBar";
import SearchBar from "./SearchBar/SearchBar";
import ButtonEnrol from "../../components/Buttons/ButtonEnrol";
import Explorevideo from "../../components/exploreVideo/Explorevideo";
import { SearchContext } from "../../contexts/SearchContext";

function Explore() {
  const [searchValue, setSearchValue] = useState("");
  return ( 
    <>
      <PageWrapper>
        <div className="container explore-page my-5">
          <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <SearchBar />
            <ExploreMobile />
            <ExploreDesktop />
            <ButtonEnrol />
            <Explorevideo />
          </SearchContext.Provider>
        </div>
      </PageWrapper>
    </>
  );
}

export default Explore;
