module.exports = {
    moduleDirectories: ["node_modules"],
    moduleNameMapper: {
        '^components/(.*)$': '<rootDir>/src/components/$1',
        "\\.css$": "identity-obj-proxy"
    },
    testEnvironment: 'jsdom'
}
