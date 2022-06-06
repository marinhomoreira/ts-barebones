import * as Helpers from "./helpers.js";

// --------------------------------------------------------------
// SCRIPT SETUP

const args = process.argv.slice(2);
// will not execute the API calls to perform operations on the tasks.
const dryRun = args.includes("--dry-run");
if (dryRun) console.log("Dry-run mode: no task operations will be executed.");

const verbose = args.includes("--verbose");
if (verbose) console.log("Verbose mode.");

// --------------------------------------------------------------
// MAIN

const elements = ["hello", "world"];

const processFn = function(element: string): void {
    console.log(element);
}

Helpers.iterateWithDelay(elements, processFn, 100);