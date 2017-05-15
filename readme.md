# get-latest-release [![Build Status](https://travis-ci.org/jxom/get-latest-release.svg?branch=master)](https://travis-ci.org/jxom/get-latest-release)

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


## API

### getLatestRelease(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global get-latest-release
```

```
$ get-latest-release --help

  Usage
    get-latest-release [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ get-latest-release
    unicorns & rainbows
    $ get-latest-release ponies
    ponies & rainbows
```


## License

MIT © [jxom](http://jxom.io)
