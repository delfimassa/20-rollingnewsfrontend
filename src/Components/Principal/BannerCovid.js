import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";

const BannerCovid = () => {
  const bannerCovid = {
    backgroundColor: "#068cda",
    margin: "0",
  };

  return (
    <div className="container text-center my-2 px-0">
      <div style={bannerCovid} className="col-12 p-3">
        <div className="text-center">
          <FontAwesomeIcon
            icon={faHeartbeat}
            className="mr-2"
            size="2x"
            color="white"
          ></FontAwesomeIcon>
          <span className="lead text-light">
            La prevencion es importante para cuidar tu salud!
          </span>
        </div>
        <p className="text-light mt-2">
          Recuerda lavarte las manos a menudo, evitar conglomeraciones de gente,
          y proteger boca y nariz en lugares publicos.
        </p>
      </div>
    </div>
  );
};

export default BannerCovid;
