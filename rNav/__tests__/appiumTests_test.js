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
    const heightInput = await driver.elementByAccessibilityId('heightInput');
    const massInput = await driver.elementByAccessibilityId('massInput');

    await heightInput.type("190");
    await massInput.type("90");

    const countBtn = await driver.elementByAccessibilityId('countBtn');
    await countBtn.click();

    await driver.sleep(1000);
    const resultText = await driver.elementByAccessibilityId('resultText');
    const text = await resultText.text();
    expect(text).toBe("24.93");

    const massInput = await driver.elementByName('Settings');


});