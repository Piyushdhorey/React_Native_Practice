import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  Switch,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {PlatformConstants} from 'react-native';

const screenHeight = Dimensions.get('window').height;

export default function LightBulb() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />

      <Image
        fadeDuration={0}
        source={
          isEnabled
            ? require('./assets/light_images/bulb_on.jpeg')
            : require('./ assets/light_images/bulb_off.jpeg')
        }
        style={styles.image}
      />

      <Switch
        trackColor={{false: '#FFF', true: '#52d964'}}
        thumbColor={isEnabled ? '#FFF' : '#fff'}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  image: {
    maxWidth: '100%',
    maxHeight: screenHeight - 180,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  switch: {
    alignSelf: 'center',
    transform: Platform.OS === 'ios' ? [] : [{scale: 1.5}],
  },
});
