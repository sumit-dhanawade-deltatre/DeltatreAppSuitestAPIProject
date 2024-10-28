const suitest = require('suitest-js-api');
const {assert} = suitest;

async function verifyB1Row() {
    await suitest.openApp();
    suitest.sleep(20000);
    await assert.runTest('790cb84d-3128-4d2e-b356-38c2248841cd');
	await assert.runTest('e9e22930-8dd9-46ff-9ea7-0ad887a60ccb');
	await assert.runTest('71c86d67-ccca-4848-8c28-40a479a5777b');

}

verifyB1Row().finally(() => suitest.closeSession());