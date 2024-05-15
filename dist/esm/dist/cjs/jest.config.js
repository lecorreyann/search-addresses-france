"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const jestConfig = {
    preset: "ts-jest/presets/js-with-ts",
    testEnvironment: "node",
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    },
    transformIgnorePatterns: ["node_modules/\\.pnpm/(?!node-fetch|fetch-blob)"],
    testTimeout: 3e4,
    testPathIgnorePatterns: ["<rootDir>/dist/"]
};
exports.default = jestConfig;
