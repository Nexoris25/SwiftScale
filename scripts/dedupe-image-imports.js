import fs from "fs";
import path from "path";

const exts = [".js", ".jsx", ".ts", ".tsx"];

function walk(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      walk(full);
      continue;
    }

    if (!exts.includes(path.extname(full))) continue;

    let content = fs.readFileSync(full, "utf8");

    // Find duplicate `import Image`
    const matches = content.match(/import Image from "next\/image";/g) || [];

    if (matches.length > 1) {
      const firstIndex = content.indexOf('import Image from "next/image";');

      const cleaned =
        content.slice(0, firstIndex + 31) + // keep first (31 chars)
        "\n" +
        content
          .slice(firstIndex + 31)
          .replace(/import Image from "next\/image";/g, "");

      fs.writeFileSync(full, cleaned, "utf8");
      console.log("✔ Cleaned duplicate imports →", full);
    }
  }
}

walk(path.join(process.cwd(), "src"));

console.log("✔ All duplicate `Image` imports removed");
