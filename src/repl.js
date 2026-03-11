import { csvToJson } from "./commands/csvToJson.js";
import { changeDirectory, upDirectory, readDirectory } from "./navigation.js";

export const startRepl = (rl, state) => {
  rl.prompt();

  rl.on("line", async (line) => {
    const [common, ...args] = line.trim().split(" ");
    switch (common) {
      case "up": {
        upDirectory(state);
        break;
      }
      case "cd": {
        changeDirectory(state, args[0]);
        break;
      }
      case "ls": {
        await readDirectory();
        break;
      }
      case "exit": {
        rl.close();
        console.log("Thank you for using Data Processing CLI!");
        return;
      }
      case "csv-to-json": {
        csvToJson(args);
        break;
      }
      default: {
        console.log("Invalid command");
        break;
      }
    }
    rl.setPrompt(`${state.currentDir}>`);
    rl.prompt();
  });

  rl.on("SIGINT", () => {
    console.log("Thank you for using Data Processing CLI!");
    process.exit(0);
  });
};
