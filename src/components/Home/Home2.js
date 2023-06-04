import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
              {getAge("2000-11-20")}
              <Trans>home2.introduce.body.part2</Trans>
              <a href="https://www.utt.fr/" target="_blank" rel="noreferrer">
                UTT
              </a>
              .
              <br />
              <br />
              <Trans>home2.introduce.body.part3</Trans>
              <br />
              <br />
              <Trans>home2.introduce.body.part4</Trans>
              <ul>
                <li className="emoji-li">
                  🔒 <Trans>home2.introduce.body.ul.1</Trans>
                </li>
                <li className="emoji-li">
                  🙌 <Trans>home2.introduce.body.ul.2</Trans>
                </li>
                <li className="emoji-li">
                  🤷‍♂️ <Trans>home2.introduce.body.ul.3</Trans>
                </li>
                <li className="emoji-li">
                  💵 <Trans>home2.introduce.body.ul.4</Trans>
                </li>
              </ul>
              <br />
              <Trans>home2.introduce.body.part5</Trans>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
