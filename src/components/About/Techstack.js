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
import { useTranslation } from "react-i18next";

function Techstack() {
  const { t } = useTranslation();

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Card
        icon={<SiGit />}
        title={t("about.tech.git.title")}
        description={t("about.tech.git.description")}
      />
      <Card
        icon={<SiTypescript />}
        title={t("about.tech.typescript.title")}
        description={t("about.tech.typescript.description")}
      />
      <Card
        icon={<FaNode />}
        title={t("about.tech.node.title")}
        description={t("about.tech.node.description")}
      />
      <Card
        icon={<DiPython />}
        title={t("about.tech.python.title")}
        description={t("about.tech.python.description")}
      />
      <Card
        icon={<FaDocker />}
        title={t("about.tech.docker.title")}
        description={t("about.tech.docker.description")}
      />
      <Card
        icon={<SiKubernetes />}
        title={t("about.tech.kubernetes.title")}
        description={t("about.tech.kubernetes.description")}
      />
      <Card
        icon={<SiHelm />}
        title={t("about.tech.helm.title")}
        description={t("about.tech.helm.description")}
      />
      <Card
        icon={<SiJsonwebtokens />}
        title={t("about.tech.jwt.title")}
        description={t("about.tech.jwt.description")}
      />
      <Card
        icon={<SiTraefikproxy />}
        title={t("about.tech.traefik.title")}
        description={t("about.tech.traefik.description")}
      />
      <Card
        icon={<SiAmazonwebservices />}
        title={t("about.tech.aws.title")}
        description={t("about.tech.aws.description")}
      />
      <Card
        icon={<SiAmazons3 />}
        title={t("about.tech.s3.title")}
        description={t("about.tech.s3.description")}
      />
      <Card
        icon={<SiGithubactions />}
        title={t("about.tech.github_actions.title")}
        description={t("about.tech.github_actions.description")}
      />
      <Card
        icon={<SiSupabase />}
        title={t("about.tech.supabase.title")}
        description={t("about.tech.supabase.description")}
      />
      <Card
        icon={<TbSql />}
        title={t("about.tech.sql.title")}
        description={t("about.tech.sql.description")}
      />
      <Card
        icon={<SiPostgresql />}
        title={t("about.tech.postgresql.title")}
        description={t("about.tech.postgresql.description")}
      />
    </Row>
  );
}

export default Techstack;
