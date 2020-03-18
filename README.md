# BMI Calculator

[![N|Solid](https://i.imgur.com/BzzMTo7.png)](https://nodesource.com/products/nsolid)
# Technology
React Native and Appium with webdriver for tests


There are 3 tabs in bottom tab navigator

  - Home - screen where you can calulcate your BMI, click on the result and go to description of your BMI category
  - Settings - screen where you can change system to metric or imperial
  - About - info about author

# Tests

  - **Unit tests** can be found in \BMI_calculator\rNav\__tests__\Calculate_test.js
  Run the test with: ``` npm test -- __tests__/Calulcate_test.js ```
  - **Automated UI tests** can be found in 
  Run the autotest with: ```npm test -- __tests__/appiumTests_test.js```
