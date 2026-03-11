import { parseArgs } from "util";
export const csvToJson = (arg) => {
  const options = {
    input: { type: "string" },
    output: { type: "string" },
  };
  const { values, positionals } = parseArgs({
    args: arg,
    options,
    allowPositionals: true,
  });
};
