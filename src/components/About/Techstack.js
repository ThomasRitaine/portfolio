import React from "react";
import { Row } from "react-bootstrap";
import { DiPython } from "react-icons/di";
import {
  SiGithubactions,
  SiGit,
  SiTypescript,
  SiKubernetes,
  SiSupabase,
  SiAmazons3,
  SiPostgresql,
  SiTraefikproxy,
  SiHelm,
  SiAmazonwebservices,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaDocker, FaNode } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import Card from "./Card";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Card icon={<SiGit />} transKey="about.tech.git" />
      <Card icon={<SiTypescript />} transKey="about.tech.typescript" />
      <Card icon={<FaNode />} transKey="about.tech.node" />
      <Card icon={<DiPython />} transKey="about.tech.python" />
      <Card icon={<FaDocker />} transKey="about.tech.docker" />
      <Card icon={<SiKubernetes />} transKey="about.tech.kubernetes" />
      <Card icon={<SiHelm />} transKey="about.tech.helm" />
      <Card icon={<SiJsonwebtokens />} transKey="about.tech.jwt" />
      <Card icon={<SiTraefikproxy />} transKey="about.tech.traefik" />
      <Card icon={<SiAmazonwebservices />} transKey="about.tech.aws" />
      <Card icon={<SiAmazons3 />} transKey="about.tech.s3" />
      <Card icon={<SiGithubactions />} transKey="about.tech.github_actions" />
      <Card icon={<SiSupabase />} transKey="about.tech.supabase" />
      <Card icon={<TbSql />} transKey="about.tech.sql" />
      <Card icon={<SiPostgresql />} transKey="about.tech.postgresql" />
    </Row>
  );
}

export default Techstack;
