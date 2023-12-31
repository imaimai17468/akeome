"use client";

import { GenerateAkeome } from "@/utils/GenerateAkeome";
import { useState, useEffect } from "react";
import { AkeomeKeys } from "@/types/Akeome.types";

type AkeomeProps = {
  language: AkeomeKeys;
};

export const Akeome = ({ language }: AkeomeProps) => {
  const [akeomeMessage, setAkeomeMessage] = useState("");

  useEffect(() => {
    setAkeomeMessage(GenerateAkeome(language));
  }, [language]);

  return (
    <h1 className="text-white text-8xl font-black animate-bounce">
      {akeomeMessage}
    </h1>
  );
};
