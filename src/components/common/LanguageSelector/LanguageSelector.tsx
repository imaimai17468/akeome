"use client";

import { languageList } from "@/constants/akeome.const";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { AkeomeKeys } from "@/types/Akeome.types";

type LanguageSelectorProps = {
  onChange: (language: AkeomeKeys) => void;
};

export const LanguageSelector = ({ onChange }: LanguageSelectorProps) => {
  const [language, setLanguage] = useState<AkeomeKeys>("japanese");

  useEffect(() => {
    onChange(language);
  }, [language]);

  return (
    <Select onValueChange={(value: AkeomeKeys) => setLanguage(value)} defaultValue="japanese">
      <SelectTrigger className="w-32">
        <SelectValue placeholder="lang" />
      </SelectTrigger>
      <SelectContent>
        {languageList.map((language) => {
          return (
            <SelectItem key={language} value={language}>
              {language}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
