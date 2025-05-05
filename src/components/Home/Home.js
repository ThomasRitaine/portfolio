import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import homeLogo from "../../Assets/home-main.webp";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Trans, withTranslation, useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(t('nav.projects.path'));
  };

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

              <div className="text-center mb-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleButtonClick}
                  className="px-4 py-2"
                >
                  <Trans>home.view_projects</Trans>
                </Button>
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
      <Home2 />
    </section>
  );
}

export default withTranslation()(Home);
