const suitest = require('suitest-js-api');
const { verifyCHD1Row } = require('/TestCases/RowTypes/LinearRows/CHD1Rows');
const { verifyEPG1Row } = require('/TestCases/RowTypes/LinearRows/EPG1Rows');

async function myTest() {
    await verifyCHD1Row();
    await verifyEPG1Row();
}

myTest().finally(() => suitest.closeSession());