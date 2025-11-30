import { Command } from "commander";
import { type Options, YourAction } from "./index";

const pkg = require("../package.json");
const program = new Command();

program
  .version(pkg.version)
  .description("xxx - A command line tool for xxx.")
  .action(async (options: Options) => {
    // write your code here
    new YourAction(options).doSomething();
  });

program.parse(process.argv);
