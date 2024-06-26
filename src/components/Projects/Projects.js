import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import server from "../../Assets/Projects/server.webp";
import pipeline from "../../Assets/Projects/ci-cd-pipeline.webp";
import portfolio from "../../Assets/Projects/portfolio.webp";
import terminal from "../../Assets/Projects/terminal.webp";
import etuuttApiSymfony from "../../Assets/Projects/etuutt-api-symfony.webp";
import cdn from "../../Assets/Projects/cdn.webp";
import chatdoc from "../../Assets/Projects/chatdoc.webp";
import labsaiarttv from "../../Assets/Projects/labsaiarttv.webp";
import aiarttv from "../../Assets/Projects/aiarttv.webp";
import qrcode from "../../Assets/Projects/qrcode.webp";
import { Trans, withTranslation } from "react-i18next";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <Trans>projects.title</Trans>
        </h1>
        <p style={{ color: "white" }}>
          <Trans>projects.body</Trans>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatdoc}
              isBlog={false}
              title={<Trans>projects.chatdoc.title</Trans>}
              description={<Trans>projects.chatdoc.body</Trans>}
              ghLink="https://github.com/ThomasRitaine/chatdoc"
              demoLink="https://chatdoc.thomas.ritaine.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={labsaiarttv}
              isBlog={false}
              title={<Trans>projects.labs-ai-art-tv.title</Trans>}
              description={<Trans>projects.labs-ai-art-tv.body</Trans>}
              ghLink="https://github.com/ThomasRitaine/auto-midjourney"
              demoLink="https://labs.ai-art.tv"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiarttv}
              isBlog={false}
              title={<Trans>projects.ai-art-tv.title</Trans>}
              description={<Trans>projects.ai-art-tv.body</Trans>}
              demoLink="https://ai-art.tv"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cdn}
              isBlog={false}
              title={<Trans>projects.cdn.title</Trans>}
              description={<Trans>projects.cdn.body</Trans>}
              ghLink="https://github.com/ThomasRitaine"
              demoLink="https://cdn.thomas.ritaine.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title={<Trans>projects.portfolio.title</Trans>}
              description={<Trans>projects.portfolio.body</Trans>}
              ghLink="https://github.com/ThomasRitaine/portfolio"
              demoLink="https://thomas.ritaine.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qrcode}
              isBlog={false}
              title={<Trans>projects.qrcode.title</Trans>}
              description={<Trans>projects.qrcode.body</Trans>}
              demoLink="https://qrcode.ai-art.tv"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terminal}
              isBlog={false}
              title={<Trans>projects.terminal.title</Trans>}
              description={<Trans>projects.terminal.body</Trans>}
              ghLink="https://github.com/ThomasRitaine/terminal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={server}
              isBlog={false}
              title={<Trans>projects.vps.title</Trans>}
              description={<Trans>projects.vps.body</Trans>}
              ghLink="https://github.com/ThomasRitaine/server-config"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={etuuttApiSymfony}
              isBlog={false}
              title={<Trans>projects.etuutt.title</Trans>}
              description={<Trans>projects.etuutt.body</Trans>}
              ghLink="https://github.com/ungdev/etuutt-api"
              demoLink="https://api-etuutt-2020.dev.uttnetgroup.fr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pipeline}
              isBlog={false}
              title={<Trans>projects.ci-cd.title</Trans>}
              description={<Trans>projects.ci-cd.body</Trans>}
              ghLink="https://github.com/ThomasRitaine"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default withTranslation()(Projects);
