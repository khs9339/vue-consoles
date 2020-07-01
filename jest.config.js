module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    '^.+\\.(js)?$': 'babel-jest',
    ".*\\.(vue)$": "vue-jest"
  },
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  testMatch: [
    '<rootDir>/**/*.test.(js)'
  ],
  
};