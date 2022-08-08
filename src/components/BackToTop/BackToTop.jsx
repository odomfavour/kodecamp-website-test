import React, { useState, useEffect } from "react";
import "./BackToTop.css";
import ScrollUpBtn from "../../Images/to_top_button.svg";

//   function to scroll up
function scrollUp() {
  window.scrollTo({
    top: 0,
    left: 0,
  });
}

const BackToTop = () => {
  const [isScrollUp, setIsScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 900) {
        setIsScrollUp(true);
      } else {
        setIsScrollUp(false);
      }
    });
  }, []);

  return (
    <>
      {isScrollUp && (
        <div
          style={{ cursor: "pointer", width: "45px", height: "45px" }}
          id="scroll-up"
          className=" position-fixed cursor-pointer"
          onClick={scrollUp}
        >
          <img src={ScrollUpBtn} alt="" className="img-fluid " />
        </div>
      )}
    </>
  );
};

export default BackToTop;
