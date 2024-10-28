import { type JestConfigWithTsJest, createDefaultPreset } from "ts-jest";
const defaultPreset = createDefaultPreset();

const jestConfig: JestConfigWithTsJest = {
  verbose: true,
  rootDir: "src",
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  testEnvironment: "jsdom",
  ...defaultPreset,
};

export default jestConfig;
