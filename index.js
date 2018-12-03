const { URL } = require("url");

const Ajv = require("ajv");
const got = require("got").get;
const cheerio = require("cheerio");

async function isPWA(uri) {
  if (!uri) {
    throw new Error("`uri` not specified");
  }
  const body = await fetchUrl(uri);
  const $ = cheerio.load(body);
  let manifest = $("link[rel='manifest']");
  if (manifest && manifest.attr("href")) {
    manifest = new URL(manifest.attr("href"), uri);
    const manifestJson = await fetchUrl(manifest, { json: true });
    const res = await lintManifest(manifestJson);
    console.log(res);
    return manifestJson;
  }
  return;
}

async function fetchUrl(uri, opts = {}) {
  const res = await got(uri, opts);
  return res.body;
}

async function fetchSchema() {
  return fetchUrl("http://json.schemastore.org/web-manifest", {json: true});
}

async function lintManifest(manifest) {
  const schema = await fetchSchema();
  const ajv = new Ajv({allErrors: true});
  const valid = ajv.validate(schema, manifest);
  if (!valid) {
    return ajv.errors;
  }
}

module.exports = {
  isPWA,
  fetchUrl
};
