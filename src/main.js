import { createInterface } from "node:readline/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { startRepl } from "./repl.js";
const state = {
  currentDir: process.cwd(),
};

const main = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  console.log("Welcome to Data Processing CLI!");
  console.log(`You are currently in ${state.currentDir}`);
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `${state.currentDir}> `,
  });
  startRepl(rl, state);
};

main();
