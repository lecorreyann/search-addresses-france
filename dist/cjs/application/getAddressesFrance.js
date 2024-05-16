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
var import_getAddressesFromGouvAdresseApi = __toESM(require("../infrastructure/getAddressesFromGouvAdresseApi.js"), 1);
async function getAddressesFrance(query) {
  let addresses = [];
  const response = await (0, import_getAddressesFromGouvAdresseApi.default)(query);
  const data = await response.json();
  if (response.status === 200) {
    for (let address of data.features) {
      addresses.push({
        postal_code: address.properties.postcode,
        city: address.properties.city,
        road: address.properties.name,
        number: address.properties.housenumber ? address.properties.housenumber : "",
        country: "France",
        latitude: address.geometry.coordinates[1],
        longitude: address.geometry.coordinates[0]
      });
    }
  }
  return addresses;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=getAddressesFrance.js.map
