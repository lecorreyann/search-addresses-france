"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const getAddressesFrance_1 = __importDefault(require("./application/getAddressesFrance"));
exports.default = getAddressesFrance_1.default;
