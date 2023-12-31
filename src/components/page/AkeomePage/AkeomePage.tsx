"use client";

import { Akeome } from "@/components/common/Akeome";
import { LanguageSelector } from "@/components/common/LanguageSelector";

export const AkeomePage = () => {
  return (
    <div className="z-10">
      <div className="absolute left-2 top-2">
        <LanguageSelector onChange={(language) => console.log(language)} />
      </div>
      <Akeome />
    </div>
  );
};
