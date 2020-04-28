import React from "react";
import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";
import { HomePageContainer } from "./homepage.style";

const Homepage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default Homepage;
