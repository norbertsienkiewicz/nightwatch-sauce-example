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
            .setValue('#fbemail', 'hello!')
            .setValue('#comments', 'foo bar baz')
            .click('#submit')
            .assert.containsText('#your_comments', 'foo bar baz')
            .end();
    },
  };
