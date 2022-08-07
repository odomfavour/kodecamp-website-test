import React from "react";
import NavigationBar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BackToTop from "../../components/BackToTop/BackToTop";

const PageWrapper = ({ children }) => {
  return (
    <section>
      {/* header component */}
      <NavigationBar />
      <main>{children}</main>
      <BackToTop />
      {/* footer component */}
      <Footer />
    </section>
  );
};

export default PageWrapper;
