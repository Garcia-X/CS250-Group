module.exports = {
    testEnvironment: "jsdom",          // still needed for document
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
    ],
};