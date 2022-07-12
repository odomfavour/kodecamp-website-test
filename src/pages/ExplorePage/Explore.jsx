import PageWrapper from '../../layout/PageWapper/PageWrapper';
import ExploreDesktop from './ExploreDesktop';
import ExploreMobile from './ExploreMobile';
import "../../App.css";
import "./Explore.css";
import SearchBar from '../../components/SearchBar/SearchBar';
import ButtonEnrol from '../../components/Buttons/ButtonEnrol';

function Explore() {
  return (
    <>
        <PageWrapper>
          <div className='container my-5'>
            <SearchBar/>
            <ExploreMobile/>
            <ExploreDesktop/>
            <ButtonEnrol/>
          </div>
        </PageWrapper>
    </>
  )
}

export default Explore