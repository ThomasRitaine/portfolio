import React from "react";
import { Row } from "react-bootstrap";
import {
  SiLinux,
  SiNixos,
  SiGithub,
  SiBitwarden,
  SiTorproject,
  SiNeovim,
} from "react-icons/si";
import Card from "./Card";
import { useTranslation } from "react-i18next";

function Toolstack() {
  const { t } = useTranslation();

  // Special description for Tor with clickable link
  const torDescription = (
    <>
      {t("about.tools.tor.description")}
      <br />
      <a
        href="http://thomrit4ylnmuwuby3mexep44adyx6algeurmf5lgl57pywprcgm6dqd.onion/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#8cb0ff', textDecoration: 'underline', fontSize: '0.9em' }}
      >
        thomrit4...onion
      </a>
    </>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Card
        icon={<SiLinux />}
        title={t("about.tools.linux.title")}
        description={t("about.tools.linux.description")}
      />
      <Card
        icon={<SiNixos />}
        title={t("about.tools.nixos.title")}
        description={t("about.tools.nixos.description")}
      />
      <Card
        icon={<SiNeovim />}
        title={t("about.tools.neovim.title")}
        description={t("about.tools.neovim.description")}
      />
      <Card
        icon={<SiGithub />}
        title={t("about.tools.github.title")}
        description={t("about.tools.github.description")}
      />
      <Card
        icon={<SiBitwarden />}
        title={t("about.tools.bitwarden.title")}
        description={t("about.tools.bitwarden.description")}
      />
      <Card
        icon={<SiTorproject />}
        title={t("about.tools.tor.title")}
        description={torDescription}
      />
    </Row>
  );
}

export default Toolstack;
