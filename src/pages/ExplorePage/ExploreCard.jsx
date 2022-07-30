import { Card } from "react-bootstrap";

function ExploreCard({ track_name, track_image, track_icon, track_desc }) {
  return (
    <>
      <div>
        <div className="mb-3">
          <div className=" col mb-4">
            <Card className="explore-card-container h-100  bg-white-100">
              <div
                className=" explore-card-bg text-white explore-card-height  "
                style={{
                  backgroundImage: `url('${track_image}')`,
                }}
              >
                <div className="px-3 py-3 h-100 d-flex flex-column justify-content-start">
                  <div className="mb-auto"></div>
                  <div className="text-start">
                    <img src={track_icon} alt={track_icon} />
                  </div>
                </div>
              </div>
              <Card.Body>
                <Card.Title className="col-md-5 w-auto">
                  <p className="explore-fs-20-600 d-flex fw-semibold deep-blue-100">
                    {track_name}
                  </p>
                </Card.Title>

                <div>
                  <Card.Text className=" explore-fs-14-500  deep-blue-100 text-start track-desc">
                    {track_desc}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreCard;
