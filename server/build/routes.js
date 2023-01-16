"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.Router());
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join("../../src/pages/Home.tsx"));
});
app.get("/portfolio", (req, res) => {
    res.sendFile(path_1.default.join("../../src/pages/Portfolio.tsx"));
});
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join("../../src/pages/ErrorNotFound.tsx"));
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
