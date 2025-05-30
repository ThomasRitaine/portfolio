import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Trans, withTranslation } from "react-i18next";
import BottomNavigation from "../BottomNavigation";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const resume_url = "https://cdn.thomas.ritaine.com/Thomas_Ritaine_Resume.pdf";

  const handleDownload = async () => {
    try {
      const response = await fetch(resume_url);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'Thomas_Ritaine_Resume.pdf';
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      window.open(resume_url, '_blank');
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={handleDownload}
            style={{ maxWidth: "250px", cursor: "pointer" }}
          >
            <AiOutlineDownload />
            &nbsp;<Trans>resume.download</Trans>
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resume_url} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={handleDownload}
            style={{ maxWidth: "250px", cursor: "pointer" }}
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
