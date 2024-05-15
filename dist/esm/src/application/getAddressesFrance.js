"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAddressDetailsFromOkapiApi_1 = __importDefault(require("../infrastructure/getAddressDetailsFromOkapiApi"));
const getAddressesFromOkapiApi_1 = __importDefault(require("../infrastructure/getAddressesFromOkapiApi"));
function getAddressesFrance(query) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, e_1, _b, _c;
        if (!process.env.OKAPI_API_KEY) {
            throw new Error("OKAPI API Key is not defined");
        }
        let addresses = [];
        const response = yield (0, getAddressesFromOkapiApi_1.default)(query, process.env.OKAPI_API_KEY);
        if (response.status === 200) {
            const data = yield response.json();
            try {
                for (var _d = true, data_1 = __asyncValues(data), data_1_1; data_1_1 = yield data_1.next(), _a = data_1_1.done, !_a; _d = true) {
                    _c = data_1_1.value;
                    _d = false;
                    let address = _c;
                    const addressDetails = yield (0, getAddressDetailsFromOkapiApi_1.default)(address.code, process.env.OKAPI_API_KEY);
                    const data = yield addressDetails.json();
                    addresses.push({
                        postal_code: data.codePostal,
                        city: data.commune,
                        road: `${data.libelleVoie}${data.lieuDit ? ` ${data.lieuDit}` : ""}`,
                        number: data.numeroVoie,
                        country: "France",
                        latitude: 0,
                        longitude: 0,
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = data_1.return)) yield _b.call(data_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return addresses;
    });
}
exports.default = getAddressesFrance;
