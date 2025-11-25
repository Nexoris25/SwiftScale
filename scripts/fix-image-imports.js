import fs from "fs";
import path from "path";

const exts = [".js", ".jsx", ".ts", ".tsx"];

function walk(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);

    if (fs.statSync(full).isDirectory()) {
      walk(full);
      continue;
    }

    if (!exts.includes(path.extname(full))) continue;

    let content = fs.readFileSync(full, "utf8");
    let lines = content.split("\n");

    // Find duplicate Image imports
    const imageImport = `import Image from "next/image";`;
    const hasImport = lines.filter((l) => l.trim() === imageImport);

    if (hasImport.length > 1) {
      console.log(`✔ Cleaning duplicates → ${full}`);

      // Keep only ONE
      let cleaned = [];
      let added = false;

      for (let l of lines) {
        if (l.trim() === imageImport) {
          if (!added) {
            cleaned.push(imageImport);
            added = true;
          }
        } else {
          cleaned.push(l);
        }
      }

      fs.writeFileSync(full, cleaned.join("\n"), "utf8");
    }
  }
}

console.log("➡ Removing duplicate <Image> imports...");
walk(path.join(process.cwd(), "src"));
console.log("✔ Cleanup complete!");
