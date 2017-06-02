import React from 'react';
import  ReactNative, { Platform, StyleSheet } from 'react-native';
import Button from 'apsl-react-native-button';

const PlatformStyleSheet = {
  create(styles) {
    const styleKeys = Object.keys(styles);
    const keptStyles = {};

    styleKeys.forEach((key) => {
      const { ios, android, ...style } = styles[key];

      keptStyles[key] = { ...style, ...Platform.select({ ios, android }) };
    });
    return StyleSheet.create(keptStyles);
  },
};

export const styles = PlatformStyleSheet.create({
  font: {
    ios: {
      fontFamily: 'Arial',
      fontSize: 12
    },
    android: {
      fontFamily: 'Roboto',
      fontSize: 12
    },
  },
  h2: {
    fontWeight: '700',
    lineHeight: 26,
    fontSize: 20,
  },
  pinkText: {
    color: '#FFBB8A'
  },
  bgDark: {
    backgroundColor: '#19262E'
  },
  inputText: {
    color: '#19262E',
    backgroundColor: '#EFF4B8',
    height: 40,
    width: 230,
    alignSelf: 'center',
    margin: 25,
    padding: 3
    },
  dkText: {
    color: '#19262E'
  },
  bgLight: {
    backgroundColor: '#EFF4B8'
  },
  btnPink: {
    color: '#fff',
    backgroundColor: '#FF6B76'
  },
  btnBlue: {
    backgroundColor: '#93C2C6',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 25
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const TextInput = ({ style, ...props }) =>
  <ReactNative.TextInput style={[styles.inputText,  style]} {...props} />;
export const Text = ({ style, ...props }) =>
  <ReactNative.Text style={[styles.font, styles.pinkText, style]} {...props} />;

export const H2 = ({ style, ...props }) =>
  <ReactNative.Text style={[styles.font, styles.h2, style]} {...props} />;

export const View = ({ style, ...props }) =>
  <ReactNative.View style={[styles.bgDark, styles.container, style]} {...props} />;

export const ButtonBlue = ({ style, ...props }) =>
  <Button style={[styles.btnBlue]} {...props} />;
