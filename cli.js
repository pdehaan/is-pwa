#!/usr/bin/env node

const { isPWA } = require("./index");

const [, , argv] = process.argv;

main(argv)
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

async function main() {
  const manifestJson = await isPWA(argv);
  console.log(JSON.stringify(manifestJson, null, 2));
}
