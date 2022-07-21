import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import PageWrapper from "../../layout/PageWapper/PageWrapper";
import "./Terms.css";

const Terms = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <h5 className="pt-3 pt-md-4 pt-lg-4 fw-semibold">3. Disclaimer</h5>
      <p className="para">
        All the materials on KodeCamp’s Website are provided "as is". KodeCamp
        makes no warranties, may it be expressed or implied, therefore negates
        all other warranties. Furthermore, KodeCamp does not make any
        representations concerning the accuracy or reliability of the use of the
        materials on its Website or otherwise relating to such materials or any
        sites linked to this Website.
      </p>
      <h5 className="pt-3 pt-md-4 pt-lg-4 fw-semibold">4. Limitations</h5>
      <p className="para">
        KodeCamp or its suppliers will not be hold accountable for any damages
        that will arise with the use or inability to use the materials on
        KodeCamp’s Website, even if KodeCamp or an authorize representative of
        this Website has been notified, orally or written, of the possibility of
        such damage. Some jurisdiction does not allow limitations on implied
        warranties or limitations of liability for incidental damages, these
        limitations may not apply to you.
      </p>
      <h5 className="pt-3 pt-md-4 pt-lg-4 fw-semibold">
        5. Revisions and Errata{" "}
      </h5>
      <p className="para">
        The materials appearing on KodeCamp’s Website may include technical,
        typographical, or photographic errors. KodeCamp will not promise that
        any of the materials in this Website are accurate, complete, or current.
        KodeCamp may change the materials contained on its Website at any time
        without notice. KodeCamp does not make any commitment to update the
        materials.
      </p>
      <h5 className="pt-3 pt-md-4 pt-lg-4 fw-semibold">6. Links</h5>
      <p className="para">
        KodeCamp has not reviewed all of the sites linked to its Website and is
        not responsible for the contents of any such linked site. The presence
        of any link does not imply endorsement by KodeCamp of the site. The use
        of any linked website is at the user’s own risk.
      </p>
      <h5 className="pt-3 pt-md-4 pt-lg-4 fw-semibold">
        7. Site Terms of Use Modifications
      </h5>
      <p className="para">
        KodeCamp may revise these Terms of Use for its Website at any time
        without prior notice. By using this Website, you are agreeing to be
        bound by the current version of these Terms and Conditions of Use.
      </p>
      <h5 className="pt-3 pt-md-4 pt-lg-4 fw-semibold">8. Your Privacy</h5>
      <p className="para">Please read our</p>
      <h5 className="pt-3 pt-md-4 pt-lg-4 fw-semibold">9. Governing Law</h5>
      <p className="para">
        Any claim related to KodeCamp's Website shall be governed by the laws of
        ng without regards to its conflict of law provisions.
      </p>
    </div>
  );

  const linkName = readMore ? "See Less" : "See More";
  return (
    <>
      <PageWrapper>
        {width > breakpoint ? (
          <Container className="py-4 py-md-5 p-lg-5 px-3">
            <div>
              <h1 className="deep-blue-100 terms-header">Terms of Service</h1>
            </div>
            <div className="terms-content black-100">
              <h5 className="black-100 pt-3 pt-md-4 pt-lg-4 fw-semibold">
                1. Terms
              </h5>
              <p className="para text-cemter">
                By accessing this Website, accessible from https://kode.camp,
                you are agreeing to be bound by these Website Terms and
                Conditions of Use and agree that you are responsible for the
                agreement with any applicable local laws. If you disagree with
                any of these terms, you are prohibited from accessing this site.
                The materials contained in this Website are protected by
                copyright and trade mark law.
              </p>
              <h5 className="pt-3 pt-md-4 pt-lg-4 fw-semibold">
                2. Use License
              </h5>
              <p className="para">
                Permission is granted to temporarily download one copy of the
                materials on KodeCamp's Website for personal, non-commercial
                transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not: modify or
                copy the materials; use the materials for any commercial purpose
                or for any public display; attempt to reverse engineer any
                software contained on KodeCamp's Website; remove any copyright
                or other proprietary notations from the materials; or
                transferring the materials to another person or "mirror" the
                materials on any other server. This will let KodeCamp to
                terminate upon violations of any of these restrictions. Upon
                termination, your viewing right will also be terminated and you
                should destroy any downloaded materials in your possession
                whether it is printed or electronic format. These Terms of
                Service has been created with the help of the Terms Of Service
                Generator.
              </p>
              <h5 className="pt-3 pt-md-4 pt-lg-4 fw-semibold">
                3. Disclaimer
              </h5>
              <p className="para">
                All the materials on KodeCamp’s Website are provided "as is".
                KodeCamp makes no warranties, may it be expressed or implied,
                therefore negates all other warranties. Furthermore, KodeCamp
                does not make any representations concerning the accuracy or
                reliability of the use of the materials on its Website or
                otherwise relating to such materials or any sites linked to this
                Website.
              </p>
              <h5 className="pt-3 pt-md-4 pt-lg-4 fw-semibold">
                4. Limitations
              </h5>
              <p className="para">
                KodeCamp or its suppliers will not be hold accountable for any
                damages that will arise with the use or inability to use the
                materials on KodeCamp’s Website, even if KodeCamp or an
                authorize representative of this Website has been notified,
                orally or written, of the possibility of such damage. Some
                jurisdiction does not allow limitations on implied warranties or
                limitations of liability for incidental damages, these
                limitations may not apply to you.
              </p>
              <h5 className="pt-3 pt-md-4 pt-lg-4 fw-semibold">
                5. Revisions and Errata{" "}
              </h5>
              <p className="para">
                The materials appearing on KodeCamp’s Website may include
                technical, typographical, or photographic errors. KodeCamp will
                not promise that any of the materials in this Website are
                accurate, complete, or current. KodeCamp may change the
                materials contained on its Website at any time without notice.
                KodeCamp does not make any commitment to update the materials.
              </p>
              <h5 className="pt-3 pt-md-4 pt-lg-4 fw-semibold">6. Links</h5>
              <p className="para">
                KodeCamp has not reviewed all of the sites linked to its Website
                and is not responsible for the contents of any such linked site.
                The presence of any link does not imply endorsement by KodeCamp
                of the site. The use of any linked website is at the user’s own
                risk.
              </p>
              <h5 className="pt-3 pt-md-4 pt-lg-4 fw-semibold">
                7. Site Terms of Use Modifications
              </h5>
              <p className="para">
                KodeCamp may revise these Terms of Use for its Website at any
                time without prior notice. By using this Website, you are
                agreeing to be bound by the current version of these Terms and
                Conditions of Use.
              </p>
              <h5 className="pt-3 pt-md-4 pt-lg-4 fw-semibold">
                8. Your Privacy
              </h5>
              <p className="para">Please read our</p>
              <h5 className="pt-3 pt-md-4 pt-lg-4 fw-semibold">
                9. Governing Law
              </h5>
              <p className="para">
                Any claim related to KodeCamp's Website shall be governed by the
                laws of ng without regards to its conflict of law provisions.
              </p>
            </div>
          </Container>
        ) : (
          <Container className="py-4 py-md-5 p-lg-5 px-3">
            <div>
              <h1 className="deep-blue-100 terms-header pb-2">
                Terms of Service
              </h1>
            </div>
            <div className="terms-content black-100">
              <div>
                <h5 className="black-100 pt-3 pt-md-4 pt-lg-4 fw-semibold">
                  1. Terms
                </h5>
                <p className="para text-cemter">
                  By accessing this Website, accessible from https://kode.camp,
                  you are agreeing to be bound by these Website Terms and
                  Conditions of Use and agree that you are responsible for the
                  agreement with any applicable local laws. If you disagree with
                  any of these terms, you are prohibited from accessing this
                  site. The materials contained in this Website are protected by
                  copyright and trade mark law.
                </p>
                <h5 className="pt-3 pt-md-4 pt-lg-4 fw-semibold">
                  2. Use License
                </h5>
                <p className="para">
                  Permission is granted to temporarily download one copy of the
                  materials on KodeCamp's Website for personal, non-commercial
                  transitory viewing only. This is the grant of a license, not a
                  transfer of title, and under this license you may not: modify
                  or copy the materials; use the materials for any commercial
                  purpose or for any public display; attempt to reverse engineer
                  any software contained on KodeCamp's Website; remove any
                  copyright or other proprietary notations from the materials;
                  or transferring the materials to another person or "mirror"
                  the materials on any other server. This will let KodeCamp to
                  terminate upon violations of any of these restrictions. Upon
                  termination, your viewing right will also be terminated and
                  you should destroy any downloaded materials in your possession
                  whether it is printed or electronic format. These Terms of
                  Service has been created with the help of the Terms Of Service
                  Generator. ..
                  <span
                    className="blue-100 text-underline"
                    onClick={() => {
                      setReadMore(!readMore);
                    }}
                  >
                    <u>{linkName}</u>
                  </span>
                </p>

                {readMore && extraContent}
              </div>
            </div>
          </Container>
        )}
      </PageWrapper>
    </>
  );
};

export default Terms;
