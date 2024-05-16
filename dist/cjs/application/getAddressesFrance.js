"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var getAddressesFrance_exports = {};
__export(getAddressesFrance_exports, {
  default: () => getAddressesFrance
});
module.exports = __toCommonJS(getAddressesFrance_exports);
var import_getAddressDetailsFromOkapiApi = __toESM(require("../infrastructure/getAddressDetailsFromOkapiApi.js"), 1);
var import_getAddressesFromOkapiApi = __toESM(require("../infrastructure/getAddressesFromOkapiApi.js"), 1);
async function getAddressesFrance(query) {
  if (!process.env.OKAPI_API_KEY) {
    throw new Error("OKAPI API Key is not defined");
  }
  let addresses = [];
  const response = await (0, import_getAddressesFromOkapiApi.default)(query, process.env.OKAPI_API_KEY);
  if (response.status === 200) {
    const data = await response.json();
    for await (let address of data) {
      const addressDetails = await (0, import_getAddressDetailsFromOkapiApi.default)(address.code, process.env.OKAPI_API_KEY);
      const data2 = await addressDetails.json();
      addresses.push({
        postal_code: data2.codePostal,
        city: data2.commune,
        road: `${data2.libelleVoie}${data2.lieuDit ? ` ${data2.lieuDit}` : ""}`,
        number: data2.numeroVoie,
        country: "France",
        latitude: 0,
        longitude: 0
      });
    }
  }
  return addresses;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=getAddressesFrance.js.map
