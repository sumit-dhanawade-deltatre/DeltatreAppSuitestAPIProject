const suitest = require('suitest-js-api');

async function myTest() {
    await suitest.openApp();
    suitest.sleep(20000);

}

myTest().finally(() => suitest.closeSession());