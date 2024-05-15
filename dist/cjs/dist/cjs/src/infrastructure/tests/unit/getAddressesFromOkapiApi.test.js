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
const getAddressesFromOkapiApi_1 = __importDefault(require("../../../infrastructure/getAddressesFromOkapiApi"));
describe("getAddressesFromOkapiApi", () => {
  it("getAddressesFromOkapiApi when query is 19 rue du", () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, getAddressesFromOkapiApi_1.default)("19 rue du", process.env.OKAPI_API_KEY);
    expect(result.status).toEqual(200);
  }));
});
//# sourceMappingURL=getAddressesFromOkapiApi.test.js.map
