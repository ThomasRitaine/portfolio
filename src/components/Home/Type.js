import React from "react";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";

function Type() {
  const { t } = useTranslation();

  return (
    <Typewriter
      options={{
        strings: [
          t("home.type.engineer"),
          t("home.type.freelance"),
          t("home.type.devops"),
          t("home.type.ai-artist"),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
