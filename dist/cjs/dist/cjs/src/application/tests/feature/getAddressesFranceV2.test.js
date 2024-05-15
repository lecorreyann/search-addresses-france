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
const getAdressesFranceV2_1 = __importDefault(require("../../../application/getAdressesFranceV2"));
describe("getAddressesFrance", () => {
  it("getAddressesFrance when query is 19 rue du Creux", () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, getAdressesFranceV2_1.default)("19 rue du Creux");
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
  }));
});
//# sourceMappingURL=getAddressesFranceV2.test.js.map
