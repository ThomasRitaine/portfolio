import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour tout le monde, je suis <span className="purple">Thomas Ritaine </span>
            né à <span className="purple"> Reims, France.</span>
            <br /> Je viens d'être diplômé ingénieur en informatique et systèmes d'information de l'UTT, Université de Technologie de Troyes.
            <br />
            Actuellement, je suis employé à <b className="purple">#Prox-i</b>, agence de communication digitale à Papeete, Tahiti, en tant que DevOps.
            <br />
            <br />
            A part développer et créer des systèmes d'information, voici quelques activités qui m'animent !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Faire du sport : course à pied, gymnastique et <i>street workout</i>
            </li>
            <li className="about-activity">
              <ImPointRight /> Jouer de la guitare
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager, recontrer de nouvelles personnes et découvrir de nouvelles cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Tous les bons ingénieurs logiciel que vous connaissez le sont devenus en résolvant des problèmes qu'ils n'étaient pas qualifiés pour résoudre, jusqu'à ce qu'ils le fassent."{" "}
          </p>
          {/* Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. */}
          <footer className="blockquote-footer">Patrick McKenzie</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
