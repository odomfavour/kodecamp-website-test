import { Carousel } from "react-bootstrap";
import ExploreCard from "./ExploreCard";
import Tracks from "./TrackData";

function ExploreMobile() {
  return (
    <>
      <div className="d-block d-sm-none mobile-carousel">
        {/* front end development track */}
        <section className="mt-4">
          <div className="pt-4 container">
            <div className="container">
              <p className="explore-fs-24-700 fw-bold deep-blue-100 lh-sm">
                Frontend Development
              </p>
            </div>
          </div>
          <Carousel
            className="pb-4"
            variant="dark"
            interval="7000"
            slide="false"
            wrap="false"
            controls="false"
            indicators="false"
            aria-hidden="false"
          >
            {Tracks.filter(
              (item) => item.category === "frontend_development"
            ).map((item) => (
              <Carousel.Item key={item.id} className="">
                <div className="text-center container d-flex justify-content-center">
                  <ExploreCard
                    track_image={item.track_image}
                    track_name={item.track_name}
                    track_desc={item.track_desc}
                    track_icon={item.track_icon}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
        {/* back end development track */}
        <section className="mt-4">
          <div className="pt-4 container">
            <div className="container">
              <p className="explore-fs-24-700 fw-bold deep-blue-100 lh-sm">
                Backend Development
              </p>
            </div>
          </div>
          <Carousel
            className="pb-4"
            variant="dark"
            interval="7000"
            slide="false"
            wrap="false"
            controls="false"
            indicators="false"
            aria-hidden="false"
          >
            {Tracks.filter(
              (item) => item.category === "backend_development"
            ).map((item) => (
              <Carousel.Item key={item.id} className="">
                <div className="text-center container d-flex justify-content-center">
                  <ExploreCard
                    track_image={item.track_image}
                    track_name={item.track_name}
                    track_desc={item.track_desc}
                    track_icon={item.track_icon}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
        {/* andriod development track */}
        <section className="mt-4">
          <div className="pt-4 container">
            <div className="container">
              <p className="explore-fs-24-700 fw-bold deep-blue-100 lh-sm">
                Android Development
              </p>
            </div>
          </div>
          <Carousel
            className="pb-4"
            variant="dark"
            interval="7000"
            slide="false"
            wrap="false"
            controls="false"
            indicators="false"
            aria-hidden="false"
          >
            {Tracks.filter(
              (item) => item.category === "android_development"
            ).map((item) => (
              <Carousel.Item key={item.id} className="">
                <div className="text-center container d-flex justify-content-center">
                  <ExploreCard
                    track_image={item.track_image}
                    track_name={item.track_name}
                    track_desc={item.track_desc}
                    track_icon={item.track_icon}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
        {/* project management track */}
        <section className="mt-4">
          <div className="pt-4 container">
            <div className="container">
              <p className="explore-fs-24-700 fw-bold deep-blue-100 lh-sm">
                Product Management
              </p>
            </div>
          </div>
          <Carousel
            className="pb-4"
            variant="dark"
            interval="7000"
            slide="false"
            wrap="false"
            controls="false"
            indicators="false"
            aria-hidden="false"
          >
            {Tracks.filter(
              (item) => item.category === "product_management"
            ).map((item) => (
              <Carousel.Item key={item.id} className="">
                <div className="text-center container d-flex justify-content-center">
                  <ExploreCard
                    track_image={item.track_image}
                    track_name={item.track_name}
                    track_desc={item.track_desc}
                    track_icon={item.track_icon}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
        {/* newly added tracks */}
        <section className="mt-4">
          <div className="pt-4 container">
            <div className="container">
              <p className="explore-fs-24-700 fw-bold deep-blue-100 lh-sm">
                Newly Added
              </p>
            </div>
          </div>
          <Carousel
            className="pb-4"
            variant="dark"
            interval="7000"
            slide="false"
            wrap="false"
            controls="false"
            indicators="false"
            aria-hidden="false"
          >
            {Tracks.filter((item) => item.category === "newly_added").map(
              (item) => (
                <Carousel.Item key={item.id} className="">
                  <div className="text-center container d-flex justify-content-center">
                    <ExploreCard
                      track_image={item.track_image}
                      track_name={item.track_name}
                      track_desc={item.track_desc}
                      track_icon={item.track_icon}
                    />
                  </div>
                </Carousel.Item>
              )
            )}
          </Carousel>
        </section>
        {/* back end development track */}
        <section className="mt-4">
          <div className="pt-4 container">
            <div className="container">
              <p className="explore-fs-24-700 fw-bold deep-blue-100 lh-sm">
                Product Design
              </p>
            </div>
          </div>
          <Carousel
            className="pb-4"
            variant="dark"
            interval="7000"
            slide="false"
            wrap="false"
            controls="false"
            indicators="false"
            aria-hidden="false"
          >
            {Tracks.filter((item) => item.category === "product_design").map(
              (item) => (
                <Carousel.Item key={item.id} className="">
                  <div className="text-center container d-flex justify-content-center">
                    <ExploreCard
                      track_image={item.track_image}
                      track_name={item.track_name}
                      track_desc={item.track_desc}
                      track_icon={item.track_icon}
                    />
                  </div>
                </Carousel.Item>
              )
            )}
          </Carousel>
        </section>
      </div>
    </>
  );
}

export default ExploreMobile;
