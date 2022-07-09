import React from "react";
import Footer from "../../components/footer/Footer";

const PageWrapper = ({ children }) => {
  return (
    <section>
      {/* header component */}
      <main>{children}</main>
      <Footer />;
    </section>
  );
};

export default PageWrapper;
