import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/styles.js'

Tab3 = () =>
  <View style={styles.center}>
    <Text style={styles.title}>About author</Text>
    <Text style={styles.text}>Piotr Majchrowski</Text>
    <Text style={styles.text}>Wrocław 2020</Text>
    <Text style={styles.text}>Wroclaw University of Science and Technology</Text>
    <Text style={styles.text}>https://github.com/primosz</Text>
  </View>

export default Tab3;