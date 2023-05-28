import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Laissez-moi <span className="purple"> me présenter </span>
            </h1>
            <p className="home-about-body">
              J'ai commencé en développant des programmes sur ma calculatrice, puis à 16 ans j'ai mis en ligne mon premier site internet.
              <br />
              Cette passion ne m'a jamais quittée, et je suis aujourd'hui <b className="purple">diplômé ingénieur informatique</b> de l'<a href="https://www.utt.fr/" target="_blank" rel="noreferrer">UTT</a>.
              <br />
              <br />
              Je maîtrise les langages du web tels que <b className="purple">JavaScript</b> et <b className="purple">PHP</b> et me suis spécialisé dans le devéloppement <i>Back End</i> avec des frameworks comme <b className="purple">NestJS</b> et <b className="purple">Symfony</b> en contribuant à des projets Open Source sur <b className="purple">GitHub</b>, ou en entreprise sur des applications innovantes .
              <br />
              <br />
              De plus, puisque "<i>un bon développeur est un développeur fainéant</i>", j'ai automatisé tous mes processus de déploiement d'applications web grâce à <b className="purple">Docker</b>, <b className="purple">GitHub Actions</b> et <b className="purple">Bash</b>.
              <br />
              Il en résulte :
              <ul>
                <li>Une augmentation drastique de la sécurité</li>
                <li>Une simplification des procédures</li>
                <li>Une réduction de l'erreur humaine</li>
                <li>Une réduction des coûts</li>
              </ul>
              <br />
              Dernièrement, je m'intéresse de près à la <b className="purple">Cybersécurité</b>, en particulier pour mes serveurs web, et à l'automatisation de tâches quotidienne en <b className="purple">Python</b>.
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
            <h1>Trouvez-moi sur les réseaux</h1>
            <p>
              N'hésitez pas à me <span className="purple">contacter </span>
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
                  href="mailto:thomas.ritaine@outlook.com"
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
export default Home2;
