var configName = process.env.SAUCE_CFG || process.env.SAUCE_USERNAME;
var cfg = require('./sauce-' + configName);
var now = new Date();
var buildName = `nightwatch-e2e-debug-${process.env.DATE_WITH_TIME || now.getTime()}`;

console.log('username:', cfg.username, 'build name:', buildName);

process.env.SAUCE_USERNAME = cfg.username;
process.env.SAUCE_ACCESS_KEY = cfg.accessKey;
process.env.SAUCE_TUNNEL_ID = cfg.tunnelId;
process.env.SAUCE_URL = cfg.url;

module.exports = {
  src_folders: ['./test/gineaPigLong.js'],
  test_settings : {
    default: {
      launch_url: 'http://ondemand.saucelabs.com:80',
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      silent: true,
      username: process.env.SAUCE_USERNAME,
      access_key: process.env.SAUCE_ACCESS_KEY,
      screenshots: {
        enabled: false,
        path: './screenshots',
      },
      globals: {
        waitForConditionTimeout: 10000,
      },
      desiredCapabilities: {
				build: buildName
			}
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
    ie11: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        platform: 'Windows 10',
        version: '11.0',
        recordMp4: true,
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        recordMp4: true,
      }
    },
  },
};

