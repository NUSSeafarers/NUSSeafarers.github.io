import fs from "fs";
import path from "path";

const voyageDir = path.join(process.cwd(), "public/images/voyages");
const outputDir = path.join(process.cwd(), "src/data");
const outputFile = path.join(outputDir, "voyageImages.ts");

const imageExtensions = /\.(jpe?g|png|webp|gif)$/i;

function getAllImagesRecursively(dir: string, baseUrl: string): string[] {
  let results: string[] = [];

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(getAllImagesRecursively(filePath, path.join(baseUrl, file)));
    } else if (imageExtensions.test(file)) {
      results.push(path.join(baseUrl, file).replace(/\\/g, "/")); // Ensure forward slashes
    }
  }

  return results;
}

const allImages = getAllImagesRecursively(voyageDir, "/images/voyages");

// Create output dir if missing
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(
  outputFile,
  `export const voyageImages = ${JSON.stringify(allImages, null, 2)};`
);

console.log(`Image list generated: ${allImages.length} images found.`);
