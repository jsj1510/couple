module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@": "./src",
        },
      },
    ],
    "react-native-reanimated/plugin",
    ["@babel/plugin-transform-private-methods", { loose: true }],
  ],
};
