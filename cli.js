#!/usr/bin/env node

const { isPWA, lintManifest } = require("./index");

const [, , argv] = process.argv;

main(argv).catch(err => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});

async function main() {
  const manifestJson = await isPWA(argv);
  if (manifestJson) {
    // eslint-disable-next-line no-console
    console.log(manifestJson);
    const errors = await lintManifest(manifestJson);
    if (errors) {
      // eslint-disable-next-line no-console
      console.error(errors);
    }
  }

}
