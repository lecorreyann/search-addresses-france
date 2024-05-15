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
const getAddressDetailsFromOkapiApi_1 = __importDefault(require("../../../infrastructure/getAddressDetailsFromOkapiApi"));
describe("getAddressDetailsFromOkapiApi", () => {
  it("getAddressesDetailsFromOkapiApi when code is 3034204381", () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, getAddressDetailsFromOkapiApi_1.default)("3034204381", process.env.OKAPI_API_KEY);
    expect(result.status).toEqual(200);
  }));
});
//# sourceMappingURL=getAddressesDetailsFromOkapiApi.test.js.map
