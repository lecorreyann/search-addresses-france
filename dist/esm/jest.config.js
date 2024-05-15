"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv is required to load environment variables from .env files
require("dotenv/config");
const jestConfig = {
    preset: "ts-jest/presets/js-with-ts",
    testEnvironment: "node",
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    transformIgnorePatterns: ["node_modules/\\.pnpm/(?!node-fetch|fetch-blob)"],
    testTimeout: 30000,
    testPathIgnorePatterns: ["<rootDir>/dist/"],
};
exports.default = jestConfig;
