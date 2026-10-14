import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DIR = "src/assets";
const files = await fs.readdir(DIR);

for (const file of files) {
  if (!/\.(png|jpe?g)$/i.test(file)) continue;

  const name = path.parse(file).name;
  const maxWidth = name === "foto-nicolas" ? 800 : 1200;
  const out = path.join(DIR, `${name}.webp`);

  await sharp(path.join(DIR, file))
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out);

  const before = (await fs.stat(path.join(DIR, file))).size;
  const after = (await fs.stat(out)).size;
  console.log(
    `${file}: ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB`,
  );
}
