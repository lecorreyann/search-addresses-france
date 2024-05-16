"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var getAddressesFromGouvAdresseApi_exports = {};
__export(getAddressesFromGouvAdresseApi_exports, {
  default: () => getAddressesFromGouvAdresseApi
});
module.exports = __toCommonJS(getAddressesFromGouvAdresseApi_exports);
async function getAddressesFromGouvAdresseApi(query) {
  const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${new URLSearchParams({
    q: query
  }).toString()}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=getAddressesFromGouvAdresseApi.js.map
