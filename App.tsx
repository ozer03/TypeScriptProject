import React from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';
import RootNavigation from './src/navigations/RootNavigation';
import { LuckGame } from './src/screens';



function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <LuckGame />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2f314a',
  },
});
