export const __esModule: boolean;
export default jestConfig;
declare namespace jestConfig {
    let preset: string;
    let testEnvironment: string;
    let moduleNameMapper: {
        "^@/(.*)$": string;
    };
    let transformIgnorePatterns: string[];
    let testTimeout: number;
    let testPathIgnorePatterns: string[];
}
