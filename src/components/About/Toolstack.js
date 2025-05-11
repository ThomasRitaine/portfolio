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

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Card icon={<SiLinux />} transKey="about.tools.linux" />
      <Card icon={<SiNixos />} transKey="about.tools.nixos" />
      <Card icon={<SiNeovim />} transKey="about.tools.neovim" />
      <Card icon={<SiGithub />} transKey="about.tools.github" />
      <Card icon={<SiBitwarden />} transKey="about.tools.bitwarden" />
      <Card icon={<SiTorproject />} transKey="about.tools.tor" />
    </Row>
  );
}

export default Toolstack;
