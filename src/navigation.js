import { dirname } from "node:path";
import { chdir, cwd } from "node:process";
export const upDirectory = (state) => {
  chdir("..");
  state.currentDir = cwd();
};

export const changeDirectory = (state, arg) => {
  try {
    chdir(arg);
    state.currentDir = cwd();
  } catch (e) {
    console.log(`Operation filed: ${e.message}`);
  }
};
