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
var __importDefault = function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAddressesFromGouvAdresseApi_1 = __importDefault(require("../infrastructure/getAddressesFromGouvAdresseApi"));
function getAddressesFranceV2(query) {
  return __awaiter(this, void 0, void 0, function* () {
    if (!process.env.OKAPI_API_KEY) {
      throw new Error("OKAPI API Key is not defined");
    }
    let addresses = [];
    const response = yield (0, getAddressesFromGouvAdresseApi_1.default)(query);
    const data = yield response.json();
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
  });
}
exports.default = getAddressesFranceV2;
//# sourceMappingURL=getAdressesFranceV2.js.map
