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
var import_getAddressesFromOkapiApi = __toESM(require("../../../infrastructure/getAddressesFromOkapiApi.js"), 1);
describe("getAddressesFromOkapiApi", () => {
  it("getAddressesFromOkapiApi when query is 19 rue du", async () => {
    const result = await (0, import_getAddressesFromOkapiApi.default)("19 rue du", process.env.OKAPI_API_KEY);
    expect(result.status).toEqual(200);
  });
});
//# sourceMappingURL=getAddressesFromOkapiApi.test.js.map
