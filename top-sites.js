const alexaTopSites = require("alexa-top-sites");

const { isPWA } = require("./index");

main("US");

async function main(country = "US") {
  const res = await alexaTopSites.byCountry(country);
  for (const site of res.sites) {
    try {
      const manifest = await isPWA(site);
      if (manifest) {
        // eslint-disable-next-line no-console
        console.log(`${site} ==> ${JSON.stringify(manifest, null, 2)}\n`);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(`${site} ==> ${err.message}\n`);
      process.exitCode = 1;
    }
  }
}
