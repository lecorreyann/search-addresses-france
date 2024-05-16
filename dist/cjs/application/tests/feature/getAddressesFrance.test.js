"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_getAddressesFrance = __toESM(require("../../../application/getAddressesFrance.js"), 1);
describe("getAddressesFrance", () => {
  it("getAddressesFrance when query is 19 rue du Creux", async () => {
    const result = await (0, import_getAddressesFrance.default)("19 rue du Creux");
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty("postal_code");
    expect(result[0].postal_code).toBeDefined();
    expect(result[0].postal_code.trim()).not.toEqual("");
    expect(result[0]).toHaveProperty("city");
    expect(result[0].city).toBeDefined();
    expect(result[0].city).not.toEqual("");
    expect(result[0]).toHaveProperty("road");
    expect(result[0].road).toBeDefined();
    expect(result[0].road.trim()).not.toEqual("");
    expect(result[0]).toHaveProperty("number");
    expect(result[0].number).toBeDefined();
    expect(result[0].country).toBeDefined();
    expect(result[0].country.trim()).not.toEqual("");
  });
});
//# sourceMappingURL=getAddressesFrance.test.js.map
