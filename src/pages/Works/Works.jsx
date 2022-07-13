import KodeCamp30 from "./KodeCamp30";
import "./Works.css";
import PageWrapper from "../../layout/PageWapper/PageWrapper";
import Analytics from "../../components/analytics/Analytics";
import { Container, Row } from "react-bootstrap";

const Works = () => {
  return (
    <PageWrapper>
      <Container>
        <Row className="container-lg my-4 d-flex gap-3 justify-content-center ">
          <Analytics cohort={"1.0"} value={65} />
          <Analytics cohort={"2.0"} value={85} />
        </Row>
      </Container>
      <KodeCamp30 />
    </PageWrapper>
  );
};

export default Works;
