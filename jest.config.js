module.exports = {
  testMatch: ["<rootDir>/**/*.test.js?(x)"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/**/*.stories.jsx"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "cobertura"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
