const suitest = require('suitest-js-api');
const {assert} = suitest;

async function verifyEPG1Row() {
   await verifyEPG1UIElements();
   await verifyOnClickingOnLiveItem();
   await verifyOnClickingOnUpcomingItem();
   await verifyOnClickingOnDatePicker();
}

async function verifyEPG1UIElements() {
	await assert.openApp().launchMode(suitest.LAUNCH_MODE.RESTART);
	await assert.runTest('495d066b-a351-4883-ac85-084ac78c6b50');
	/**
	 * Verify Elements
	 */
	await assert.element('EPG_ITEM_TITLE').exists().timeout(20000);
	await assert.element('EPG_ITEM_TIME').exists().timeout(1000);
	await assert.element('EPG_ITEM_IMAGE').exists().timeout(1000);
	await assert.element('EPG_ITEM_DESCRIPTION').exists().timeout(1000);
	await assert.element('EPG_LIVE_NOW_BADGE').exists().timeout(1000);
	await assert.element('EPG_DATE_PICKER').exists().timeout(1000);
	await assert.element('EPG_ITEM_TITLE').exists().timeout(1000);
	await assert.element('EPG_DATE_TITLE').exists().timeout(1000);
}

async function verifyOnClickingOnLiveItem() {
	await assert.openApp().launchMode(suitest.LAUNCH_MODE.RESTART);
	await assert.runTest('495d066b-a351-4883-ac85-084ac78c6b50');
	/**
	 * Verify UI elements on EPG1 Hero container: Live Now Badge, Time, Title, Description and Image
	 */
	await assert.element('EPG_ITEM_TITLE').exists().timeout(20000);
	await assert.element('EPG_ITEM_IMAGE').exists().timeout(1000);
	await assert.element('EPG_ITEM_TIME').exists().timeout(1000);
	await assert.element('EPG_LIVE_NOW_BADGE').exists().timeout(1000);
	await assert.element('EPG_ITEM_DESCRIPTION').exists().timeout(1000);
	/**
	 * Verify UI elements on EPG1 channels and Item Gird: Progress bar on time block and on item, Time left, Title and Image
	 */
	await assert.element('EPG_LIVE_ITEM_FOCUSED').exists().timeout(20000);
	await assert.element('EPG_LIVE_ITEM_TITLE').exists().timeout(1000);
	await assert.element('EPG_LIVE_ITEM_TIME').exists().timeout(1000);
	await assert.element('EPG_LIVE_ITEM_IMAGE').exists().timeout(1000);
	await assert.element('EPG_LIVE_ITEM_SCHEDULE_PROGRESS').exists().timeout(1000);
	await assert.element('EPG_LIVE_ITEM_PROGRESS_BAR').exists().timeout(1000);
	/**
	 * Press ok button on Live item should take us to Channel detail page - CHD1 row player - Diva
	 */
	await assert.press(VRC.ENTER).interval(1000);
	/**
	 * Verify UI elements on CHD1 row - Player
	 * 
	 */
	await assert.element('CHD1_LINEAR_PLAYER').exists().timeout(20000);
}

async function verifyOnClickingOnUpcomingItem() {
	await assert.openApp().launchMode(suitest.LAUNCH_MODE.RESTART);
	await assert.runTest('495d066b-a351-4883-ac85-084ac78c6b50');
	/**
	 * Verify UI elements on focusing on Upcoming items - Hero elements should change as per the item selected Title, Time and State badge should change to "Upcoming"
	 * 
	 */
	await assert.element('EPG_ITEM_TITLE').exists().timeout(20000);
	await assert.press(VRC.RIGHT).interval(1000);
	/**
	 * Verify UI elements on EPG1 Hero container: Upcoming Badge, Time, Title, Description and Image
	 */
	await assert.element('EPG_ITEM_TITLE').exists().timeout(20000);
	await assert.element('EPG_ITEM_TIME').exists().timeout(1000);
	await assert.element('EPG_ITEM_IMAGE').exists().timeout(1000);
	await assert.element('EPG_UPCOMING_BADGE').exists().timeout(1000);
	await assert.element('EPG_ITEM_DESCRIPTION').exists().timeout(1000);
	/**
	 * Verify UI elements on EPG1 channels and Item Gird: Time duration, Title
	 */
	await assert.element('EPG_UPCOMING_ITEM_FOCUSED').exists().timeout(20000);
	await assert.element('EPG_UPCOMING_ITEM_TIME').exists().timeout(1000);
	await assert.element('EPG_UPCOMING_ITEM_TITLE').exists().timeout(1000);
	/**
	 * Press ok button on More Details button, should take us to the detail page
	 */
	await assert.press(VRC.ENTER).interval(1000);
	await assert.element('EPG_UPCOMING_MORE_DETAILS_BTN').exists().timeout(2000);
	await assert.press(VRC.ENTER).interval(1000);
	/**
	 * Verify UI elements on DH1 row or any other
	 * 
	 */
	await assert.element('DH1_Hero_Title').exists().timeout(20000);
}

async function verifyOnClickingOnDatePicker() {
	await assert.openApp().launchMode(suitest.LAUNCH_MODE.RESTART);
	await assert.runTest('495d066b-a351-4883-ac85-084ac78c6b50');
	/**
	 * On clicking on Date picker button should show dates to select
	 */
	await assert.element('EPG_DATE_PICKER').exists().timeout(20000);
	await assert.press(VRC.UP).interval(1000);
	await assert.press(VRC.ENTER).interval(1000);
	await assert.element('EPG_DATE_PICKER_ITEMS').exists().timeout(5000);
	await assert.press(VRC.DOWN).interval(1000);
	await assert.press(VRC.ENTER).interval(1000);
	/**
	 * Navigate back on EPG channel page
	 */
	await assert.element('EPG_LIVE_NOW_BADGE').doesNot().visible().timeout(10000);
}


verifyEPG1Row().finally(() => suitest.closeSession());