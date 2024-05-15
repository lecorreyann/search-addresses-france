"use strict";
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", { value: true });
function getAddressesFromOkapiApi(query, OKAPI_API_KEY) {
  return __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch(`https://api.laposte.fr/controladresse/v2/adresses?q=${new URLSearchParams({
      q: query
    }).toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Okapi-Key": OKAPI_API_KEY
      }
    });
    return response;
  });
}
exports.default = getAddressesFromOkapiApi;
//# sourceMappingURL=getAddressesFromOkapiApi.js.map
