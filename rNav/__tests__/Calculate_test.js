import 'react-native';
import React from 'react';
import Tab1 from '../src/screens/tabs/Tab1.js';

import renderer from 'react-test-renderer';


//you have to comment ComponentDidMount() from Tab1.js in order tu run tests (shallow render problem)
it('function test', () => {
    let CalculatorData = renderer.create(<Tab1/>).getInstance();
    CalculatorData.calculate(90,190, 'metric')
    expect(CalculatorData.state.bmi).toEqual("24.93")

    CalculatorData.calculate(200,80, 'imperial')
    expect(CalculatorData.state.bmi).toEqual("21.97")
});

it('function test', () => {
    let CalculatorData = renderer.create(<Tab1/>).getInstance();
    
    CalculatorData.calculate(200,80, 'imperial')
    expect(CalculatorData.state.bmi).toEqual("21.97")
});
