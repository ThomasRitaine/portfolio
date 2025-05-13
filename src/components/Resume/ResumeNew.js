import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Trans, useTranslation, withTranslation } from "react-i18next";
import BottomNavigation from "../BottomNavigation";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const { i18n } = useTranslation('home');

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // URLs to CDN PDFs
  const resume_fr = "https://cdn.thomas.ritaine.com/CV_Thomas_Ritaine_fr.pdf";
  const resume_en = "https://cdn.thomas.ritaine.com/CV_Thomas_Ritaine_en.pdf";

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={i18n.language === 'fr' ? resume_fr : resume_en}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;<Trans>resume.download</Trans>
          </Button>
        </Row>

        <Row className="resume">
          <Document file={i18n.language === 'fr' ? resume_fr : resume_en} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={i18n.language === 'fr' ? resume_fr : resume_en}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;<Trans>resume.download</Trans>
          </Button>
        </Row>

        <BottomNavigation
          showResume={false}
        />

      </Container>
    </div>
  );
}

export default withTranslation()(ResumeNew);
