'use client';

import Particles from 'react-particles';
import { loadFireworksPreset } from 'tsparticles-preset-fireworks';

import type { Engine } from 'tsparticles-engine';

export const Fireworks = () => {
  const customInit = async (engine: Engine) => {
    await loadFireworksPreset(engine);
  };

  const options = {
    preset: 'fireworks',
  };

  return <Particles options={options} init={customInit} />;
};
