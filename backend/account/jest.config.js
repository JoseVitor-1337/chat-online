module.exports = {
  preset: "@shelf/jest-mongodb",
  clearMocks: true,
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testMatch: ["<rootDir>/tests/**/*.test.ts"],
};
