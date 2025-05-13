import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/headshot.webp";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Trans, withTranslation } from "react-i18next";
import BottomNavigation from "../BottomNavigation";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <Trans>home2.about.title</Trans>
            </h1>
            <p className="home-about-body">
              <Trans
                components={{
                  a: <a href="https://cryptea.thomas.ritaine.com/" target="_blank" rel="noreferrer" />
                }}
              >
                home2.about.intro
              </Trans>
              <br />
              <br />
              <Trans>home2.about.intro2</Trans>
              <br />
              <br />
              <br />
              <h3>
                🌐 <Trans>home2.about.technical.title</Trans>
              </h3>
              <p>
                <Trans>home2.about.technical.body</Trans>
              </p>
              <br />
              <h3>
                🤖 <Trans>home2.about.ai.title</Trans>
              </h3>
              <p>
                <Trans>home2.about.ai.body</Trans>
              </p>
              <br />
              <h3>
                🛠️ <Trans>home2.about.infrastructure.title</Trans>
              </h3>
              <p>
                <Trans>home2.about.infrastructure.body</Trans>
                <br />
                <a
                  href="http://thomrit4ylnmuwuby3mexep44adyx6algeurmf5lgl57pywprcgm6dqd.onion"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://thomrit4... .onion
                </a>
              </p>
              <br />
              <h3>
                📱 <Trans>home2.about.mobile.title</Trans>
              </h3>
              <p>
                <Trans>home2.about.mobile.body</Trans>
              </p>
              <br />
              <h3>
                📚 <Trans>home2.about.learning.title</Trans>
              </h3>
              <p>
                <Trans>home2.about.learning.body</Trans>
              </p>
              <br />
              <h3>
                🚀 <Trans>home2.about.sparetime.title</Trans>
              </h3>
              <p>
                <Trans>home2.about.sparetime.body</Trans>
              </p>
              <br />
              <h3>
                ✨ <Trans>home2.about.moreabout.title</Trans>
              </h3>
              <p>
                <Trans>home2.about.moreabout.body</Trans>
              </p>
              <br />
              <br />
              <Trans>home2.about.footer</Trans>
              <br />
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Professional Headshot"
                style={{ borderRadius: "50%" }}
              />
            </Tilt>
          </Col>
        </Row>

        <BottomNavigation
          projectsText={<Trans>home.view_projects</Trans>}
        />

        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              <Trans>home2.media.title</Trans>
            </h1>
            <p>
              <Trans>home2.media.body</Trans>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ThomasRitaine"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/thomas-ritaine/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:thomas@ritaine.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default withTranslation()(Home2);
