/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  'native-base',
  'react-native-svg',
  'react-native-web',
  'react-native-safe-area-context',
  '@react-aria/visually-hidden',
  '@react-native-aria/button',
  '@react-native-aria/checkbox',
  '@react-native-aria/combobox',
  '@react-native-aria/focus',
  '@react-native-aria/interactions',
  '@react-native-aria/listbox',
  '@react-native-aria/overlays',
  '@react-native-aria/radio',
  '@react-native-aria/slider',
  '@react-native-aria/tabs',
  '@react-native-aria/utils',
  '@react-stately/combobox',
  '@react-stately/radio',
]);

/** @type {import('next').NextConfig} */
module.exports = withPlugins(
  [
    withTM,
    // your plugins go here.
  ],
  {
    webpack: (config) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        // Transform all direct `react-native` imports to `react-native-web`
        'react-native$': 'react-native-web',
      };
      config.resolve.extensions = ['.web.js', '.web.ts', '.web.tsx', ...config.resolve.extensions];
      return config;
    },
    env: {
      POI_ADDRESS: '0xe82d8437cfE311c88708275bAa7ac3AB672A5219',
      // CHAIN_ID: 1 // Production
      CHAIN_ID: 42 // Dev - Staging
    },
  }
);
