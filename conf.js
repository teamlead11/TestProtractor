exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    multiCapabilities: [{
        'browserName': 'firefox',
        count: 4
    }, {
        'browserName': 'chrome',
        count: 4
    }],

    // Spec patterns are relative to this directory.
    specs: [
        'Feature/testcaseone.feature'
    ],

    baseURL: 'http://localhost:8080/',

    cucumberOpts: {
        require: 'Feature/Steps.js',
        tags: false,
       // format: 'pretty',
        profile: false,
        'no-source': true
    }
};