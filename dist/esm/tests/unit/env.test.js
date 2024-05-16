"use strict";
describe("check environment variables", () => {
    it("check if OKAPI_API_KEY is defined on .env", () => {
        expect(process.env.OKAPI_API_KEY).toBeDefined();
    });
    if (typeof process.env.OKAPI_API_KEY === "string") {
        it("check if OKAPI_API_KEY is not empty", () => {
            expect(process.env.OKAPI_API_KEY?.trim()).not.toEqual("");
        });
    }
});
