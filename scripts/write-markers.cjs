// Writes package.json marker files into the build output directories so that
// Node resolves the correct module system for each build, regardless of the
// root package.json "type" field.
const fs = require("fs");
const path = require("path");

const dist = path.join(__dirname, "..", "dist");

const markers = [
  { dir: "esm", type: "module" },
  { dir: "cjs", type: "commonjs" },
];

for (const { dir, type } of markers) {
  const target = path.join(dist, dir);
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(path.join(target, "package.json"), JSON.stringify({ type }, null, 2) + "\n");
}
