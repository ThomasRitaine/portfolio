import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.webp";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Trans, withTranslation } from "react-i18next";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <Trans>home.hi</Trans>{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <Trans>home.iam</Trans>
                <strong className="main-name"> Thomas Ritaine</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <a
        href="https://www.fiverr.com/ThomasRitaine"
        target="_blank"
        rel="noreferrer"
        className="fiverr-button"
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <TbBrandFiverr style={{ marginRight: "10px" }} />
        <Trans>home.fiverr</Trans>
      </a>
      <Home2 />
    </section>
  );
}

export default withTranslation()(Home);
