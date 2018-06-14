const URL = 'https://saucelabs.com/test/guinea-pig';

module.exports = {
    'Guinea Pig Assert Title': (browser) => {
        browser
            .url(URL)
            .waitForElementVisible('body')
            .assert.title('I am a page title - Sauce Labs')
            .end();
    },
    'Guinea Pig Fill the form': async (browser) => {

        function executeSequence(browser, number) {
            return browser
                .setValue('#fbemail', `${number}${number}${number}${number}${number}`)
                .setValue('#comments', `${number}${number}${number}${number}${number}`)
                .click('#submit')
                .pause(15000)
                .clearValue('#fbemail')
                .clearValue('#comments')
                .pause(15000)
        }

        browser.url(URL).waitForElementVisible('body');

        // 2 sequences per minute, '40' means test suite will take 20 minutes to complete
        for(let i = 0; i < 40; i++) {
            await executeSequence(browser, i);
        }

        browser.end();
    },
  };
