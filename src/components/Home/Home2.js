import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/headshot.webp";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Trans, withTranslation } from "react-i18next";

function Home2() {
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <Trans>home2.introduce.title</Trans>
            </h1>
            <p className="home-about-body">
              <Trans>home2.introduce.body.part1</Trans>
              {getAge("2000-11-20") + 1}
              <Trans>home2.introduce.body.part2</Trans>
              <br />
              <br />
              <Trans>home2.introduce.body.early_programming</Trans>
              <a href="https://cryptea.thomas.ritaine.com/" target="_blank" rel="noreferrer">
                <Trans>home2.introduce.body.cryptea_link</Trans>
              </a>
              <br />
              <br />
              <h3>
                🌐 <Trans>home2.introduce.body.section1.title</Trans>
              </h3>
              <ul>
                <li>
                  <Trans>home2.introduce.body.section1.body.li1</Trans>
                </li>
                <li>
                  <Trans>home2.introduce.body.section1.body.li2</Trans>
                </li>
                <li>
                  <Trans>home2.introduce.body.section1.body.li3</Trans>
                </li>
              </ul>
              <br />
              <h3>
                🤖 <Trans>home2.introduce.body.section2.title</Trans>
              </h3>
              <p>
                <Trans>home2.introduce.body.section2.body</Trans>
              </p>
              <br />
              <h3>
                🛠️ <Trans>home2.introduce.body.section3.title</Trans>
              </h3>
              <p>
                <Trans>home2.introduce.body.section3.body</Trans>
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
                📱 <Trans>home2.introduce.body.section4.title</Trans>
              </h3>
              <p>
                <Trans>home2.introduce.body.section4.body</Trans>
              </p>
              <br />
              <h3>
                📚 <Trans>home2.introduce.body.section5.title</Trans>
              </h3>
              <p>
                <Trans>home2.introduce.body.section5.body</Trans>
              </p>
              <br />
              <br />
              <Trans>home2.introduce.body.footer</Trans>
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
