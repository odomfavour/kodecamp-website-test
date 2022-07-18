import { useEffect } from "react";
import PageWrapper from "../../layout/PageWapper/PageWrapper";
import ExploreDesktop from "./ExploreDesktop";
import ExploreMobile from "./ExploreMobile";
import "../../App.css";
import "./Explore.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import ButtonEnrol from "../../components/Buttons/ButtonEnrol";
import Explorevideo from "../../components/exploreVideo/Explorevideo";

function Explore() {
 
  return (
    <>
      <PageWrapper>
        <div className="container explore-page my-5">
          <SearchBar />
          <ExploreMobile />
          <ExploreDesktop />
          <ButtonEnrol />
          <Explorevideo />
        </div>
      </PageWrapper>
    </>
  );
}

export default Explore;
