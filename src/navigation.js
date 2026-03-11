import { chdir, cwd } from "node:process";
import { readdir } from "fs/promises";

export const upDirectory = (state) => {
  try {
    chdir("..");
    state.currentDir = cwd();
  } catch (error) {
    console.log(`Operation filed: ${error.message}`);
  }
};

export const changeDirectory = (state, arg) => {
  try {
    chdir(arg);
    state.currentDir = cwd();
  } catch (error) {
    console.log(`Operation filed: ${error.message}`);
  }
};

export const readDirectory = async () => {
  try {
    const dir = await readdir(cwd(), { withFileTypes: true, recursive: true });
    const result = dir.map((file) => ({
      name: file.name,
      type: file.isDirectory()
        ? "directory"
        : file.isFile()
          ? "file"
          : "it isn't a file or a directory",
    }));
    console.table(result);
  } catch (error) {
    console.log(`Operation filed: ${error.message}`);
  }
};
