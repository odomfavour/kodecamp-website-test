import React from "react";
import PageWrapper from "../layout/PageWapper/PageWrapper";
import Land from "./LandingPage/Land";
import LandTestimony from "./LandingPageTesti/LandTestimony";


const Index = () => {
  return (
    <>
      <PageWrapper>
        <Land />
        <LandTestimony/>
      </PageWrapper>
    </>
  );
};

export default Index;
