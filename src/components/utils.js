// src/components/utils.js

function generateSpiralPoints(count, radius, color) {
  const points = [];
  const spiralTurns = 4;
  for (let i = 0; i < count; i++) {
    const t = (i / count) * Math.PI * 2 * spiralTurns;
    const x = radius * Math.cos(t) + (Math.random() - 0.5) * 3;
    const y = radius * Math.sin(t) + (Math.random() - 0.5) * 3;
    const z = (i - count / 2) * 0.1 + (Math.random() - 0.5) * 6;

    points.push({
      idx: i,
      position: [x, y, z],
      color,
    });
  }
  return points;
}

export const pointsInner = generateSpiralPoints(300, 2, "#a855f7"); // purple
export const pointsOuter = generateSpiralPoints(300, 4, "#6366f1"); // blue-violet
