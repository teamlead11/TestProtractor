var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({And, But, Given, Then, When, setDefaultTimeout}) {
    setDefaultTimeout(80 * 1000);

    Given(/^I am in demo website$/, function (callBack) {
        browser.ignoreSynchronization = true;
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        browser.manage().window().maximize();
        callBack();
    });

    When(/^I enter some values$/, function (callBack) {
        browser.ignoreSynchronization = true;
        element(By.id('username')).sendKeys('angular');
        element(By.id('password')).sendKeys('password');
        callBack();
    });

});