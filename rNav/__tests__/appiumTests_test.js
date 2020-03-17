import wd from 'wd';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
platformName: 'Android',
deviceName: 'emulator-5554',
app: 'C:/Users/Primosz/Desktop/react_nav/BMI_calculator/rNav/android/app/build/outputs/apk/release/app-release.apk'};
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
await driver.init(config);
await driver.sleep(3000);
}) // Sometime for the app to load
test('test', async () => {
expect(await driver.hasElementByAccessibilityId('countBtn')).toBe(true);
const element = await driver.elementByAccessibilityId('countBtn')
await element.click()
expect(await driver.hasElementByAccessibilityId('nie')).toBe(false);
});