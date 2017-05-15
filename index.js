const axios = require('axios');

const getLatestRelease = async ({owner, repo, ext}) => {
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
			console.log(`Couldn't find an asset with extension \`${ext}\`!`);
			return null;
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
};

module.exports = async ({owner, repo, ext}) => getLatestRelease({owner, repo, ext});
