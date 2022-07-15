import KodeCamp30 from "./KodeCamp30";
import Howitworks from "./Howitworks";
import "./Works.css";
import "./Howitworks.css"
import PageWrapper from "../../layout/PageWapper/PageWrapper";

const Works = () => {
    return (
        <PageWrapper>
            <Howitworks />
            <KodeCamp30 />
        </PageWrapper>
        
    );
}
 
export default Works;