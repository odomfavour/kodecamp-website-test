import React from "react";
import PageWrapper from "../layout/PageWapper/PageWrapper";
import Land from "./LandingPage/Land";
import LandTestimony from "./LandingPageTesti/LandTestimony";
import LandBenefit from "./LandPagBenfits/LandBenefit";


const Index = () => {
  return (
    <>
      <PageWrapper>  
        <Land />
        <LandBenefit/>
        <LandTestimony/>
      </PageWrapper>
    </>
  );
};

export default Index;
