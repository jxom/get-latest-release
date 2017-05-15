# get-latest-release

> Find the latest release of a given GitHub repository


## Install

```
$ npm install --save get-latest-release
```


## Usage

```js
const getLatestRelease = require('get-latest-release');

getLatestRelease({
  owner: 'sindresorhus',
  repo: 'caprine',
  ext: 'dmg'
});
/**
{ 
  version: 'v2.3.1',
  url: 'https://github.com/sindresorhus/caprine/releases/tag/v2.3.1',
  asset: { 
    url: 'https://api.github.com/repos/sindresorhus/caprine/releases/assets/3867404',
    name: 'caprine-2.3.1.dmg',
    content_type: 'application/x-apple-diskimage',
    download_url: 'https://github.com/sindresorhus/caprine/releases/download/v2.3.1/caprine-2.3.1.dmg' 
  } 
}
*/
```


## CLI

```
$ npm install --global get-latest-release
```

```
$ get-latest-release --help

  Find the latest release of a given GitHub repository

  Usage
    $ get-latest-release -o [owner] -r [repository]

  Options
    -o  Owner of the repository [required]
    -r  Respository to get latest released from [required]

  Examples
    $ get-latest-release -r caprine -o sindresorhus -e dmg
        The latest version is: v2.3.1
    Tag URL: https://github.com/sindresorhus/caprine/releases/tag/v2.3.1

    Asset name: caprine-2.3.1.dmg
    Asset URL: https://api.github.com/repos/sindresorhus/caprine/releases/assets/3867404
    Content Type: application/x-apple-diskimage
    Download URL: https://github.com/sindresorhus/caprine/releases/download/v2.3.1/caprine-2.3.1.dmg
```


## License

MIT © [jxom](http://jxom.io)
