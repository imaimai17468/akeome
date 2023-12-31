"use client";

import { RandomlyGenerateAkeome } from "@/utils/RandomlyGenerateAkeome";
import { useState, useEffect } from "react";

export const Akeome = () => {
  const [akeomeMessage, setAkeomeMessage] = useState("");

  useEffect(() => {
    setAkeomeMessage(RandomlyGenerateAkeome());
  }, []);
  
  return (
    <h1 className="text-white text-8xl font-black animate-bounce">
      {akeomeMessage}
    </h1>
  );
};
