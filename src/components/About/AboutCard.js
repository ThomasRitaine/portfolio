import React from "react";
import Card from "react-bootstrap/Card";
import { Trans, withTranslation } from "react-i18next";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <Trans>about.discover.body</Trans>
          </p>
          <ul>
            <li className="emoji-li">
              💪 <Trans>about.discover.body.ul.1</Trans>
            </li>
            <li className="emoji-li">
              🎶 <Trans>about.discover.body.ul.2</Trans>
            </li>
            <li className="emoji-li">
              🌏 <Trans>about.discover.body.ul.3</Trans>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "<Trans>about.discover.quote</Trans>"
          </p>
          <footer className="blockquote-footer">Patrick McKenzie</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default withTranslation()(AboutCard);
