const suitest = require('suitest-js-api');

async function myTest() {
    await suitest.openApp();
}

myTest().finally(() => suitest.closeSession());