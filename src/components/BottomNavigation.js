import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

function BottomNavigation({
  showAbout = true,
  showProjects = true,
  showResume = true,
  aboutText = null,
  projectsText = null,
  resumeText = null
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="text-center py-5">
      {showAbout && (
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate(t('nav.about.path'))}
          className="px-4 py-2 mx-2"
        >
          {aboutText || <Trans>nav.about</Trans>}
        </Button>
      )}
      {showProjects && (
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate(t('nav.projects.path'))}
          className="px-4 py-2 mx-2"
        >
          {projectsText || <Trans>nav.projects</Trans>}
        </Button>
      )}
      {showResume && (
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate(t('nav.resume.path'))}
          className="px-4 py-2 mx-2"
        >
          {resumeText || <Trans>nav.resume</Trans>}
        </Button>
      )}
    </div>
  );
}

export default BottomNavigation;
