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
    return manifestJson;
  }
  return;
}

async function fetchUrl(uri, opts = {}) {
  const res = await got(uri, opts);
  return res.body;
}

async function lintManifest(manifest) {
  // Set the `Accept: "*/*"` header to avoid some 406 errors from schemastore.org/IIS.
  const schema = await fetchUrl("http://json.schemastore.org/web-manifest", {
    json: true,
    headers: { Accept: "*/*" }
  });

  const ajv = new Ajv({ allErrors: true, schemaId: "auto" });
  ajv.addMetaSchema(require("ajv/lib/refs/json-schema-draft-04.json"));
  const valid = ajv.validate(schema, manifest);
  if (!valid) {
    return ajv.errors;
  }
}

module.exports = {
  isPWA,
  fetchUrl,
  lintManifest
};
