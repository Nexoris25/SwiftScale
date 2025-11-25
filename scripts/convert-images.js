import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDirs = [
  path.join(process.cwd(), "src/asset/image"),
  path.join(process.cwd(), "src/asset/image-prev")
];

const outputDir = path.join(process.cwd(), "public/optimized-images");

// Allowed formats to convert
const validExtensions = [".png", ".jpg", ".jpeg"];

async function convertImage(filePath, outputPath) {
  try {
    await sharp(filePath)
      .resize({
        width: 1200, // Lighthouse-friendly max size
        withoutEnlargement: true
      })
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log("Converted:", outputPath);
  } catch (err) {
    console.error("Sharp failed on:", filePath, err);
  }
}

async function run() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const dir of inputDirs) {
    if (!fs.existsSync(dir)) {
      console.error("Folder not found:", dir);
      continue;
    }

    const files = fs.readdirSync(dir);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();

      if (!validExtensions.includes(ext)) continue;

      const inputPath = path.join(dir, file);
      const outputPath = path.join(
        outputDir,
        file.replace(ext, ".webp")
      );

      await convertImage(inputPath, outputPath);
    }
  }

  console.log("Conversion completed!");
}

run();
