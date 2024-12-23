const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

// Base Metro configuration
const baseConfig = getDefaultConfig(__dirname);

// Custom Metro configuration
const customConfig = {
  // Your custom configuration here
};

// Merge the default config with your custom config
const mergedConfig = mergeConfig(baseConfig, customConfig);

// Wrap the merged configuration with Reanimated's Metro configuration
const finalConfig = wrapWithReanimatedMetroConfig(mergedConfig);

module.exports = finalConfig;
