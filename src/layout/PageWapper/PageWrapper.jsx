import React from 'react'
import NavigationBar from '../../pages/Navbar/Navbar'
import Footer from "../../components/footer/Footer";

const PageWrapper = ({ children }) => {
  return (
    <section>
        {/* header component */}
        <NavigationBar />
        <main>
            {children}
        </main>
        {/* footer component */}
      <Footer />
    </section>
  );
};

export default PageWrapper;