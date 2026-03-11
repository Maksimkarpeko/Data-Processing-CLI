import { changeDirectory, upDirectory } from "./navigation.js";

export const startRepl = (rl, state) => {
  rl.prompt();

  rl.on("line", (line) => {
    const [common, ...args] = line.trim().split(" ");

    console.log(common);
    switch (common) {
      case "up": {
        upDirectory(state);
        break;
      }
      case "cd": {
        changeDirectory(state, args[0]);
        break;
      }
      case "exit": {
        rl.close();
        console.log("Thank you for using Data Processing CLI!");
        return;
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
