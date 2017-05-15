const meow = require('meow');
const getLatestRelease = require('.');

const cli = meow(
  `
Usage
  $ get-latest-release -o [owner] -r [repository]

Options
  -o	Owner of the repository [required]
  -r	Respository to get latest released from [required]

Examples
  $ get-latest-release -r caprine -o sindresorhus -e dmg

  The latest version is: v2.3.1
  Tag URL: https://github.com/sindresorhus/caprine/releases/tag/v2.3.1

  Asset name: caprine-2.3.1.dmg
  Asset URL: https://api.github.com/repos/sindresorhus/caprine/releases/assets/3867404
  Content Type: application/x-apple-diskimage
  Download URL: https://github.com/sindresorhus/caprine/releases/download/v2.3.1/caprine-2.3.1.dmg
`
);

const printLatestReleaseAsset = asset => {
  console.log('');
  console.log(`Asset name: ${asset.name}`);
  console.log(`Asset URL: ${asset.url}`);
  console.log(`Content Type: ${asset.content_type}`);
  console.log(`Download URL: ${asset.download_url}`);
};

const handleCLI = async () => {
  const flags = cli.flags;
  if (!flags.o) {
    console.log('Error! Please specify an owner (-o).');
    console.log('Type `get-latest-release --help` for more info');
    return null;
  }
  if (!flags.r) {
    console.log('Error! Please specify a repository.');
    console.log('Type `get-latest-release --help` for more info');
    return null;
  }

  const latest = await getLatestRelease({
    owner: flags.o,
    repo: flags.r,
    ext: flags.e
  });

  console.log(`The latest version is: ${latest.version}`);
  console.log(`Tag URL: ${latest.url}`);
  if (latest.asset) {
    printLatestReleaseAsset(latest.asset);
  } else if (latest.assets) {
    latest.assets.forEach(asset => printLatestReleaseAsset(asset));
  }
};

handleCLI();
