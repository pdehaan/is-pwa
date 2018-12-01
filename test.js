/* eslint-disable no-console */

const assert = require("assert");
const { isPWA } = require("./index");

main();

async function main() {
  // eslint-disable-next-line no-unused-vars
  const gitHubManifestJson = await hasPWA("https://github.com/", true);
  // console.log(JSON.stringify(gitHubManifestJson, null, 2));

  // eslint-disable-next-line no-unused-vars
  const googleManifestJson = await hasPWA("https://google.com/", false);
  // console.log(JSON.stringify(googleManifestJson, null, 2));
}

async function hasPWA(uri, expected) {
  const manifest = await isPWA(uri);
  const func = expected ? assert.notStrictEqual : assert.strictEqual;
  func(manifest, undefined);
  return manifest;
}
