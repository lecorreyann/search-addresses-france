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
var getAddressDetailsFromOkapiApi_exports = {};
__export(getAddressDetailsFromOkapiApi_exports, {
  default: () => getAddressDetailsFromOkapiApi
});
module.exports = __toCommonJS(getAddressDetailsFromOkapiApi_exports);
async function getAddressDetailsFromOkapiApi(code, OKAPI_API_KEY) {
  const response = await fetch(`https://api.laposte.fr/controladresse/v2/adresses/${code}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Okapi-Key": OKAPI_API_KEY
    }
  });
  return response;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=getAddressDetailsFromOkapiApi.js.map
