"use client";

import { Akeome } from "@/components/common/Akeome";
import { LanguageSelector } from "@/components/common/LanguageSelector";
import { useState } from "react";
import { AkeomeKeys } from "@/types/Akeome.types";

export const AkeomePage = () => {
  const [language, setLanguage] = useState<AkeomeKeys>("japanese");

  return (
    <div className="z-10">
      <div className="absolute left-2 top-2">
        <LanguageSelector onChange={(language) => setLanguage(language)} />
      </div>
      <Akeome language={language} />
    </div>
  );
};
