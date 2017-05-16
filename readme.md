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

getLatestRelease({
  owner: 'sindresorhus',
  repo: 'caprine',
});
/**
{ 
  version: 'v2.3.1',
  url: 'https://github.com/sindresorhus/caprine/releases/tag/v2.3.1'
  assets: [ 
    { 
      url: 'https://api.github.com/repos/sindresorhus/caprine/releases/assets/3867410',
      name: 'caprine-2.3.1-mac.zip',
      content_type: 'application/zip',
      download_url: 'https://github.com/sindresorhus/caprine/releases/download/v2.3.1/caprine-2.3.1-mac.zip' 
    },
    { 
      url: 'https://api.github.com/repos/sindresorhus/caprine/releases/assets/3867402',
      name: 'caprine-2.3.1-x86_64.AppImage',
      content_type: 'application/octet-stream',
      download_url: 'https://github.com/sindresorhus/caprine/releases/download/v2.3.1/caprine-2.3.1-x86_64.AppImage' 
    },
    { 
      url: 'https://api.github.com/repos/sindresorhus/caprine/releases/assets/3867404',
      name: 'caprine-2.3.1.dmg',
      content_type: 'application/x-apple-diskimage',
      download_url: 'https://github.com/sindresorhus/caprine/releases/download/v2.3.1/caprine-2.3.1.dmg' 
    },
    { 
      url: 'https://api.github.com/repos/sindresorhus/caprine/releases/assets/3867415',
      name: 'caprine-setup-2.3.1.exe',
      content_type: 'application/x-msdownload',
      download_url: 'https://github.com/sindresorhus/caprine/releases/download/v2.3.1/caprine-setup-2.3.1.exe' 
    },
    { 
      url: 'https://api.github.com/repos/sindresorhus/caprine/releases/assets/3867409',
      name: 'caprine_2.3.1_amd64.deb',
      content_type: 'application/x-debian-package',
      download_url: 'https://github.com/sindresorhus/caprine/releases/download/v2.3.1/caprine_2.3.1_amd64.deb' 
    },
    { 
      url: 'https://api.github.com/repos/sindresorhus/caprine/releases/assets/3867411',
      name: 'latest-mac.json',
      content_type: 'application/json',
      download_url: 'https://github.com/sindresorhus/caprine/releases/download/v2.3.1/latest-mac.json' 
    },
    { 
      url: 'https://api.github.com/repos/sindresorhus/caprine/releases/assets/3867416',
      name: 'latest.yml',
      content_type: 'text/yaml',
      download_url: 'https://github.com/sindresorhus/caprine/releases/download/v2.3.1/latest.yml' 
    } 
  ]
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
    -e  Extension of a target release asset [optional]

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
