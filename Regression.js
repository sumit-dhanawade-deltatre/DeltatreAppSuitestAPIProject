const suitest = require('suitest-js-api');
const { verifyCHD1Row } = require('./CHD1Rows');
const { verifyEPG1Row } = require('./EPG1Rows');

async function myTest() {
    await verifyCHD1Row();
    await verifyEPG1Row();
}

myTest().finally(() => suitest.closeSession());