import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Banner from "components/Banner";
import Images from "constants/images";

function MainPage(props) {
  return (
    <div className="photo-main">
      <Banner
        title="Your awesome photos"
        backgroundUrl={Images.pinkBackground}
      />
      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
      </Container>
    </div>
  );
}

MainPage.propTypes = {};

export default MainPage;
