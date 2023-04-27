import React from 'react';
import {SafeAreaView} from 'react-native';
import {enableScreens} from 'react-native-screens';

import {AppStyles} from './App.styles';
import {BanksNavigator} from './src/navigators/Banks.navigator';

enableScreens();

const App = (): JSX.Element => {
  const styles = AppStyles;

  return (
    <SafeAreaView style={styles.container}>
      <BanksNavigator />
    </SafeAreaView>
  );
};

export default App;
