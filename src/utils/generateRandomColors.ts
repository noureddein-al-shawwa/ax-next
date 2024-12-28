export function generateRandomColors(seed: number, count: number) {
  const colors = [];
  let currentSeed = seed;

  for (let i = 0; i < count; i++) {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    const hue = Math.floor((currentSeed / 233280) * 360);
    colors.push(`hsl(${hue}, 70%, 70%)`);
  }

  return colors;
}
