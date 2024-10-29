const suitest = require('suitest-js-api');
const {assert} = suitest;

async function verifyCHD1Row() {
   await verifyCHD1UIElements();

}

async function verifyCHD1UIElements() {
	await assert.openApp().launchMode(suitest.LAUNCH_MODE.RESTART);
	await assert.runTest('02e13da8-dada-41a0-9676-ca41a0f0fb24');
	/**
	 * Verify Elements
	 */
	await assert.element('CHD1_TITLE').exists().timeout(20000);
	await assert.element('CHD1_ON_NOW').exists().timeout(1000);
	await assert.element('CHD1_TIME').exists().timeout(1000);
	await assert.element('CHD1_ITEM_DETAILS_BUTTON').exists().timeout(1000);
	await assert.element('CHD1_ITEM_FULL_SCHEDULE_BUTTON').exists().timeout(1000);
	await assert.element('CHD1_ITEM_STOP_BUTTON').exists().timeout(1000);
	await assert.element('CHD1_ITEM_PROGRESS_BAR').exists().timeout(1000);
	await assert.element('CHD1_CHANNEL_LOGO').exists().timeout(1000);
	await assert.element('CHD1_ITEM_TIME_DURATION').exists().timeout(1000);
	await assert.element('CHD1_ITEM_TIME_POS').exists().timeout(1000);
	await assert.element('CHD1_PLAYER_VIDEO').exists().timeout(1000);
}

verifyCHD1Row().finally(() => suitest.closeSession());