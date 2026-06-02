import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@4.1.2/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@4.1.2/+esm";

await loadAll(tsParticles);

await tsParticles.load({
  id: "intro-particles",
  options: {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    particles: {
      paint: {
        fill: {
          color: { value: "#ff6161" },
          enable: true,
        },
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" },
        random: true,
        speed: 0.3,
        straight: false,
      },
      number: { density: { enable: true }, value: 160 },
      opacity: {
        animation: { enable: true, speed: 3, sync: false },
        value: { min: 0, max: 1 },
      },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
  },
});

await tsParticles.load({
  id: "stack-particles",
  options: {
    fpsLimit: 30,
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 300, density: { enable: true } },
      paint: {
        fill: {
          color: {
            value: { h: 0, s: 100, l: 50 },
            animation: {
              l: { enable: true, speed: 70, sync: false, min: 30, max: 100 },
            },
          },
          enable: true,
        },
      },
      shape: {
        type: "matrix",
        options: {
          matrix: { interval: { min: 30, max: 60 } },
        },
      },
      effect: {
        type: "shadow",
        options: { shadow: { color: "#ff6161", blur: 7 } },
      },
      size: { value: 10 },
      move: {
        enable: true,
        direction: "bottom",
        straight: true,
        speed: { min: 5, max: 9 },
      },
    },
    trail: {
      enable: true,
      length: 10,
      fill: { color: "#07070f" },
    },
    poisson: { enable: true },
  },
});
