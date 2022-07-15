import KodeCamp30 from "./KodeCamp30";
import Howitworks from "./Howitworks";
import "./Works.css";
import "./Howitworks.css"
import PageWrapper from "../../layout/PageWapper/PageWrapper";
import Analytics from "../../components/analytics/Analytics";
import { Container, Row } from "react-bootstrap";

const Works = () => {
  return (
    <PageWrapper>
      <Container>
      <Howitworks />
        <Row className="container-lg mx-auto my-4 d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center p-0">
          <Analytics cohort={"1.0"} value={65} />
          <Analytics cohort={"2.0"} value={85} />
        </Row>
      </Container>
      <KodeCamp30 />
    </PageWrapper>
  );
};

export default Works;
