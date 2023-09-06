// esbuild.config.js
const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["./src/entry.server.js"], // Specify your entry point
    bundle: true, // Bundle all dependencies into a single file
    outfile: "./.build/server.js", // Output file
    platform: "node", // Target platform (Node.js)
    target: "node14", // Target Node.js version (change as needed)
    format: "cjs", // CommonJS module format
  })
  .catch(() => process.exit(1));
