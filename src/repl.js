export const startRepl = (rl) => {
  rl.prompt();

  rl.on("line", (line) => {
    const common = line.trim().toLowerCase();
    switch (common) {
      case "up": {  
        
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
    rl.prompt();
  });

  rl.on("SIGINT", () => {
    console.log("Thank you for using Data Processing CLI!");
    process.exit(0);
  });
};
