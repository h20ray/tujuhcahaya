import sharp from "sharp";
import path from "node:path";

async function generate() {
	const svg = `
<svg width="1000" height="1000" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
  <!-- Solid clean white background -->
  <rect width="1000" height="1000" fill="#ffffff" />
  <!-- Centered 7C emblem with safe margin for circular mask -->
  <g transform="translate(180, 180) scale(0.64)">
    <svg viewBox="0 0 15875 15875" width="1000" height="1000">
      <path d="M13209.56 2093.57c60.25-170.71 42.67-323.83-52.72-459.4-95.4-135.56-233.46-203.34-414.21-203.34H9820.58L5106.13 14956.64c-70.29 180.74-60.26 341.41 30.12 481.99 90.37 140.57 230.96 210.87 421.74 210.87h2907z" fill="#d50000"/>
      <path d="M4988.18 225.5c1302.14 0 2357.73 1055.59 2357.73 2357.73 0 1302.15-1055.59 2357.73-2357.73 2357.73S2630.45 3885.38 2630.45 2583.23c0-1302.14 1055.59-2357.73 2357.73-2357.73" fill="#d50000"/>
    </svg>
  </g>
</svg>`;

	const targetPath = path.resolve("public/publisher-logo-1000x1000.png");
	await sharp(Buffer.from(svg)).png().toFile(targetPath);
	console.log("Successfully generated:", targetPath);
}

generate();
