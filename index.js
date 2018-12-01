const { URL } = require("url");

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

module.exports = {
  isPWA,
  fetchUrl
};
