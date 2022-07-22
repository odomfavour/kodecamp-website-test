import { useContext } from "react";
import { Col } from "react-bootstrap";
import ExploreCard from "./ExploreCard";
import Tracks from "./TrackData";
import { SearchContext } from "../../contexts/SearchContext";

function ExploreDesktop() {
  const { searchValue } = useContext(SearchContext);
  return (
    <>
      {searchValue ? (
        <section className=" d-none d-sm-block my-5">
          <div className="row d-flex justify-content-start">
            {Tracks.filter((item) => {
              if (
                item.track_name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              ) {
                return item;
              } else {
                return null;
              }
            }).map((item) => (
              <Col key={item.id} className="col-sm-6 col-md-6 col-lg-4">
                <ExploreCard
                  track_image={item.track_image}
                  track_name={item.track_name}
                  track_desc={item.track_desc}
                  track_icon={item.track_icon}
                />
              </Col>
            ))}
          </div>
        </section>
      ) : (
        <div className="d-none d-sm-block my-4 ">
          {/* Frontend track Section */}
          <section className="">
            <div className="pt-5">
              <p className="explore-fs-24-700 fw-bold deep-blue-100">
                FrontEnd Development
              </p>
            </div>
            <div className="row d-flex justify-content-start">
              {Tracks.filter(
                (item) => item.category === "frontend_development"
              ).map((item) => (
                <Col key={item.id} className="col-sm-6 col-md-6 col-lg-4">
                  <ExploreCard
                    track_image={item.track_image}
                    track_name={item.track_name}
                    track_desc={item.track_desc}
                    track_icon={item.track_icon}
                  />
                </Col>
              ))}
            </div>
          </section>
          {/* BackEnd track Section */}
          <section className="mt-4">
            <div className="pt-5">
              <p className="explore-fs-24-700 fw-bold deep-blue-100">
                BackEnd Development{" "}
              </p>
            </div>
            <div className="row d-flex justify-content-start">
              {Tracks.filter(
                (item) => item.category === "backend_development"
              ).map((item) => (
                <Col key={item.id} className="col-sm-6 col-md-6 col-lg-4">
                  <ExploreCard
                    track_image={item.track_image}
                    track_name={item.track_name}
                    track_desc={item.track_desc}
                    track_icon={item.track_icon}
                  />
                </Col>
              ))}
            </div>
          </section>
          {/* Andriod Development track Section */}
          <section className="mt-4">
            <div className="pt-5">
              <p className="explore-fs-24-700 fw-bold deep-blue-100">
                Andriod Development{" "}
              </p>
            </div>
            <div className="row d-flex justify-content-start">
              {Tracks.filter(
                (item) => item.category === "android_development"
              ).map((item) => (
                <Col key={item.id} className="col-sm-6 col-md-6 col-lg-4">
                  <ExploreCard
                    track_image={item.track_image}
                    track_name={item.track_name}
                    track_desc={item.track_desc}
                    track_icon={item.track_icon}
                  />
                </Col>
              ))}
            </div>
          </section>
          {/* Product Management track Section */}
          <section className="mt-4">
            <div className="pt-5">
              <p className="explore-fs-24-700 fw-bold deep-blue-100">
                Product Management{" "}
              </p>
            </div>
            <div className="row d-flex justify-content-start">
              {Tracks.filter(
                (item) => item.category === "product_management"
              ).map((item) => (
                <Col key={item.id} className="col-sm-6 col-md-6 col-lg-4">
                  <ExploreCard
                    track_image={item.track_image}
                    track_name={item.track_name}
                    track_desc={item.track_desc}
                    track_icon={item.track_icon}
                  />
                </Col>
              ))}
            </div>
          </section>
          {/* Newly Added track Section */}
          <section className="mt-4">
            <div className="pt-5">
              <p className="explore-fs-24-700 fw-bold deep-blue-100">
                Newly Added{" "}
              </p>
            </div>
            <div className="row d-flex justify-content-start">
              {Tracks.filter((item) => item.category === "newly_added").map(
                (item) => (
                  <Col key={item.id} className="col-sm-6 col-md-6 col-lg-4">
                    <ExploreCard
                      track_image={item.track_image}
                      track_name={item.track_name}
                      track_desc={item.track_desc}
                      track_icon={item.track_icon}
                    />
                  </Col>
                )
              )}
            </div>
          </section>
          {/* Product Design track Section */}
          <section className="mt-4">
            <div className="pt-5">
              <p className="explore-fs-24-700 fw-bold deep-blue-100">
                Product Design{" "}
              </p>
            </div>
            <div className="row d-flex justify-content-start">
              {Tracks.filter((item) => item.category === "product_design").map(
                (item) => (
                  <Col key={item.id} className="col-sm-6 col-md-6 col-lg-4">
                    <ExploreCard
                      track_image={item.track_image}
                      track_name={item.track_name}
                      track_desc={item.track_desc}
                      track_icon={item.track_icon}
                    />
                  </Col>
                )
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default ExploreDesktop;
