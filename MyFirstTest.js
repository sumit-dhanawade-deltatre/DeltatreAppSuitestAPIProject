const suitest = require('suitest-js-api');
const { sleep } = require('wd/lib/commands');

async function myTest() {
    await suitest.openApp();
    sleep(20000);
}

myTest().finally(() => suitest.closeSession());