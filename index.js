#!/usr/bin/env node
const axios = require('axios');

const getLatestRelease = async ({ owner, repo, ext }) => {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;
    const res = await axios.get(url);
    const latestRelease = {
      version: res.data.tag_name,
      url: res.data.html_url
    };

    if (ext) {
      const asset = res.data.assets.filter(asset => asset.name.includes(ext));
      if (asset && asset.length > 0) {
        latestRelease.asset = {
          url: asset[0].url,
          name: asset[0].name,
          content_type: asset[0].content_type,
          download_url: asset[0].browser_download_url
        };
      } else {
        throw new Error(`Couldn't find an asset with extension \`${ext}\`.`);
      }
    } else {
      latestRelease.assets = res.data.assets.map(asset => ({
        url: asset.url,
        name: asset.name,
        content_type: asset.content_type,
        download_url: asset.browser_download_url
      }));
    }
    return latestRelease;
  } catch (err) {
    if (err.code === 'ENOTFOUND') {
      throw new Error('Network error.');
    } else if (err.response && err.response.status === 404) {
      throw new Error('Could not find a release.');
    }
    throw new Error(err);
  }
};

module.exports = async ({ owner, repo, ext }) =>
  getLatestRelease({ owner, repo, ext });
