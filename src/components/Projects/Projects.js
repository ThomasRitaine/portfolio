import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import server from "../../Assets/Projects/server.webp";
import pipeline from "../../Assets/Projects/ci-cd-pipeline.webp";
import portfolio from "../../Assets/Projects/portfolio.webp";
import terminal from "../../Assets/Projects/terminal.webp";
import etuuttApiSymfony from "../../Assets/Projects/etuutt-api-symfony.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">travaux </strong> récents
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={server}
              isBlog={false}
              title="Mon serveur personnel"
              description="Je loue un serveur et j'y héberge mes projets personnels et ceux de mes clients. J'ai configuré le serveur de A à Z, avec Grafana comme outil de monitoring, phpMyAdmin en administration des bases de données, Traefik en reverse-proxy, filtrage IP et HTTP auth pour les pages sensibles, un serveur SFTP, des connexions SSH via PubKey + 2FA TOTP, un firewall + fail2ban, et des backup journalières automatisées, le tout avec Docker."
              ghLink="https://github.com/ThomasRitaine/server-config"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pipeline}
              isBlog={false}
              title="Pipeline CI CD"
              description="Une pipeline CI CD basée sur GitHub Actions, Docker et Bash scripts. Elle permet automatiquement de vérifier le code, mettre à jour les dépendances, déployer en pré-prod lors d'un push sur la branche dev, et en prod lors d'un push sur main, dans les deux cas derrière un reverse-proxy. Ce projet est pour l'instant dans un repo privé."
              ghLink="https://github.com/ThomasRitaine"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Mon portfolio"
              description="Le portfolio que vous consultez actuellement. Il est réalisé avec React, est responsive, utilise des animations, charge super rapidement grâce à l'optimisation des images en webp, et est hébergé sur mon serveur personnel."
              ghLink="https://github.com/ThomasRitaine/portfolio"
              demoLink="https://thomas.ritaine.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terminal}
              isBlog={false}
              title="Customisation du terminal Bash"
              description="J'ai utilisé Starship pour customiser mon terminal Bash, et j'ai créé un script d'installation automatique. Cette interface montre diverses informations comme le nom de l'utilisateur et de la machine locale ou distante, le status Docker de l'app du répertoire courant, les languages utilisés, le temps d'exécution et le code de retour de la dernière commande, etc."
              ghLink="https://github.com/ThomasRitaine/ThomasRitaine/tree/main/bash_custom"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={etuuttApiSymfony}
              isBlog={false}
              title="EtuUTT - API"
              description="Une API qui sert de Back End au site étudiant de l'UTT, école d'ingénieur. Cette applicaton web implémentée en Symfony avec API Platform permet de voir la liste des étudiants, chercher et noter des cours, comparer des emplois du temps, et bien plus encore. J'ai entre autre rédigé intégralement le README et la documentation de l'API."
              ghLink="https://github.com/ungdev/etuutt-api"
              demoLink="https://api-etuutt-2020.dev.uttnetgroup.fr/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
