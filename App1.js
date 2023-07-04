import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// Frame bileşenini oluşturun ve sadece stil özelliklerini içersin
const Frame = () => {
  return (
    <View style={styles.frame} />
  );
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // Çerçeveleri oluşturun ve 5 satır ve 3 sütun şeklinde yerleştirin
  const frames = [];
  for (let row = 0; row < 5; row++) {
    const rowFrames = [];
    for (let col = 0; col < 3; col++) {
      rowFrames.push(<Frame key={`${row}-${col}`} />);
    }
    frames.push(
      <View key={`row-${row}`} style={styles.row}>
        {rowFrames}
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.container}>
          {frames}
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title=" BAŞLA "
            onPress={() => {
              // Butona basıldığında yapılacak işlemleri burada belirleyebilirsiniz.
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  frame: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'black',
    margin: 5,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});

export default App;