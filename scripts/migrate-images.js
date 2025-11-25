// scripts/migrate-images.js
// Migrates all images from src/asset to public/asset
// And rewrites all imports + <img> to <Image> + correct paths

import fs from "fs";
import path from "path";

// folders to migrate
const SOURCE_DIRS = [
  "src/asset/image",
  "src/asset/image-prev"
];

// destination under public
const TARGET_BASE = "public/asset";

// supported src file types
const exts = [".png", ".jpg", ".jpeg", ".webp"];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function moveImages() {
  SOURCE_DIRS.forEach((srcDir) => {
    const absSrc = path.join(process.cwd(), srcDir);
    if (!fs.existsSync(absSrc)) {
      console.warn(`⚠ Source folder missing: ${absSrc}`);
      return;
    }

    const folderName = path.basename(srcDir);
    const targetDir = path.join(process.cwd(), TARGET_BASE, folderName);
    ensureDir(targetDir);

    const files = fs.readdirSync(absSrc);

    files.forEach((file) => {
      const ext = path.extname(file).toLowerCase();
      if (!exts.includes(ext)) return;

      const srcPath = path.join(absSrc, file);

      if (!fs.existsSync(srcPath)) {
        console.warn("⚠ Skipped missing file:", srcPath);
        return;
      }

      // Output is always .webp
      const outName = file.replace(/\.(png|jpg|jpeg)$/i, ".webp");
      const dstPath = path.join(targetDir, outName);

      ensureDir(path.dirname(dstPath));

      try {
        fs.copyFileSync(srcPath, dstPath);
        console.log(`✔ Copied → ${dstPath}`);
      } catch (err) {
        console.error("❌ Copy failed:", err.message);
      }
    });
  });
}

function rewriteFiles() {
  const codeExts = [".js", ".jsx", ".ts", ".tsx"];
  const project = process.cwd();

  const EXCLUDED_FOLDERS = [
    "node_modules",
    ".next",
    ".git",
    "public",
    "coverage",
    "dist",
    "build"
  ];

  function shouldSkip(dir) {
    return EXCLUDED_FOLDERS.some(skip => dir.includes(path.sep + skip));
  }

  function walk(dir) {
    if (shouldSkip(dir)) return;

    for (const file of fs.readdirSync(dir)) {
      const full = path.join(dir, file);

      if (shouldSkip(full)) continue;

      const stat = fs.statSync(full);

      if (stat.isDirectory()) {
        walk(full);
      } else if (codeExts.includes(path.extname(full))) {
        let content = fs.readFileSync(full, "utf8");
        let updated = content;

        // Convert image imports
        updated = updated.replace(
          /import\s+(.*?)\s+from\s+["']@\/asset\/(image|image-prev)\/(.*?)["']/g,
          (match, varName, folder, fileName) => {
            const newPath = `/asset/${folder}/${fileName.replace(/\.(png|jpg|jpeg)$/i, ".webp")}`;
            return `import Image from "next/image";\n// migrated\nconst ${varName} = "${newPath}";`;
          }
        );

        // Convert <img> to <Image>
        updated = updated.replace(
          /<img([^>]*?)src=["']([^"']+)["']([^>]*?)>/g,
          `<Image$1 src="$2" $3 />`
        );

        if (updated !== content) {
          fs.writeFileSync(full, updated, "utf8");
          console.log(`✔ Updated imports in: ${full}`);
        }
      }
    }
  }

  walk(project);
}

console.log("➡ Moving optimized images to /public...");
moveImages();

console.log("➡ Rewriting imports + <img> → <Image>...");
rewriteFiles();

console.log("✔ Migration complete. All images now served from /public");
