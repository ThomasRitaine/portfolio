import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiPython } from "react-icons/di";
import {
  SiGithubactions,
  SiGit,
  SiGnubash,
  SiTypescript,
  SiKubernetes,
  SiTorproject,
  SiSupabase,
  SiPrisma,
  SiAmazons3,
  SiPostgresql,
  SiTraefikproxy,
} from "react-icons/si";
import { FaDocker, FaNode } from "react-icons/fa";
import { TbSql } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTraefikproxy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazons3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSupabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrisma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTorproject />
      </Col>
    </Row>
  );
}

export default Techstack;
