import React from 'react';
import {ImageBackground, View, StyleSheet, Button } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
        <ImageBackground source={require('../assets/R.png')} style={styles.logo} />
        <View style={styles.rectangleContainer}>
          <Button title="LOGIN" color="red" onPress={() => console.log('Login Pressed')} />
          <Button title="REGISTER" color="green" onPress={() => console.log('Register Pressed')} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: '10%',
    left: '35%',
  },
  rectangleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default WelcomeScreen;