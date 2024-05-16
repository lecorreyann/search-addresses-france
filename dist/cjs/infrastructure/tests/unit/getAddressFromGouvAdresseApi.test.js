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
var import_getAddressesFromGouvAdresseApi = __toESM(require("../../../infrastructure/getAddressesFromGouvAdresseApi.js"), 1);
describe("getAddressFromGouvAdresseApi", () => {
  it("getAddressFromGouvAdresseApi when query is 19 rue du Creux", async () => {
    const result = await (0, import_getAddressesFromGouvAdresseApi.default)("19 rue du Creux");
    expect(result.status).toEqual(200);
  });
});
//# sourceMappingURL=getAddressFromGouvAdresseApi.test.js.map
