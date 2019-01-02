const URL = 'https://saucelabs.com/test/guinea-pig';

module.exports = {
    'Guinea Pig Assert Title': (browser) => {
        browser
            .url(URL)
            .waitForElementVisible('body')
            .assert.title('I am a page title - Sauce Labs')
            .end();
    },
    'Guinea Pig Fill the form': (browser) => {
        browser
            .url(URL)
            .waitForElementVisible('body')
            .setValue('#fbemail', 'hello 1!')
            .setValue('#comments', 'foo bar baz 1')
            .click('#submit')
            .pause(2000)
            .clearValue('#fbemail')
            .clearValue('#comments')
            .pause(2000)
            .setValue('#fbemail', 'hello 2!')
            .setValue('#comments', 'foo bar baz 2')
            .click('#submit')
            .pause(2000)
            .clearValue('#fbemail')
            .clearValue('#comments')
            .pause(2000)
            .setValue('#fbemail', 'hello 3!')
            .setValue('#comments', 'foo bar baz 3')
            .click('#submit')
            .assert.containsText('#your_comments', 'yyyyyyyyyyyyyyy')
            .end();
    },
  };
