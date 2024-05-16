"use strict";
describe("check environment variables", () => {
  it("check if OKAPI_API_KEY is defined on .env", () => {
    expect(process.env.OKAPI_API_KEY).toBeDefined();
  });
  if (typeof process.env.OKAPI_API_KEY === "string") {
    it("check if OKAPI_API_KEY is not empty", () => {
      var _a;
      expect((_a = process.env.OKAPI_API_KEY) == null ? void 0 : _a.trim()).not.toEqual("");
    });
  }
});
//# sourceMappingURL=env.test.js.map
