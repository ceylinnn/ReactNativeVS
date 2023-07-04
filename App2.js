import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

const Slider = ({ images }) => {
  return (
    <ScrollView horizontal={true} style={styles.slider}>
      {images.map((image, index) => (
        <Image key={index} source={{ uri: image }} style={styles.image} />
      ))}
    </ScrollView>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  const sliderData = [
    [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/800px-VAN_CAT.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/800px-VAN_CAT.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/800px-VAN_CAT.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/800px-VAN_CAT.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/800px-VAN_CAT.png',
    ],
    [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/800px-VAN_CAT.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/800px-VAN_CAT.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/800px-VAN_CAT.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/800px-VAN_CAT.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/800px-VAN_CAT.png',
    ],
    [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/800px-VAN_CAT.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/800px-VAN_CAT.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/800px-VAN_CAT.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/800px-VAN_CAT.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/800px-VAN_CAT.png',
    ],
  ];

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.sliderContainer}>
          {sliderData.map((images, sliderIndex) => (
            <View key={`slider-${sliderIndex}`} style={styles.sliderWrapper}>
              <Text style={styles.sliderTitle}>Slider {sliderIndex + 1}</Text>
              <Slider images={images} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    flexDirection: 'column',
    marginVertical: 50,
  },
  sliderWrapper: {
    marginBottom: 50,
  },
  sliderTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 8,
  },
  slider: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  image: {
    width: 110,
    height: 170,
    marginRight: 12,
    resizeMode: 'cover',
  },
});

export default App;