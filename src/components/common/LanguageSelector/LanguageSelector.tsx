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

type LanguageSelectorProps = {
  onChange: (language: string) => void;
};

export const LanguageSelector = ({ onChange }: LanguageSelectorProps) => {
  const [language, setLanguage] = useState<string>("");

  useEffect(() => {
    onChange(language);
  }, [language]);

  return (
    <Select onValueChange={(value) => setLanguage(value)}>
      <SelectTrigger className="w-24">
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
