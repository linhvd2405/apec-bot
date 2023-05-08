"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperFileService = void 0;
const common_1 = require("@nestjs/common");
const bytes_1 = __importDefault(require("bytes"));
const xlsx_1 = __importDefault(require("xlsx"));
let HelperFileService = class HelperFileService {
    writeExcel(rows, options) {
        const headers = Object.keys(rows[0]);
        const worksheet = xlsx_1.default.utils.json_to_sheet(rows);
        const workbook = xlsx_1.default.utils.book_new();
        xlsx_1.default.utils.sheet_add_aoa(worksheet, [headers], { origin: 'A1' });
        xlsx_1.default.utils.book_append_sheet(workbook, worksheet, options && options.sheetName ? options.sheetName : 'Sheet 1');
        const buff = xlsx_1.default.write(workbook, {
            type: 'buffer',
            bookType: 'xlsx',
        });
        return buff;
    }
    readExcel(file) {
        const workbook = xlsx_1.default.read(file);
        const worksheetName = workbook.SheetNames;
        const worksheet = workbook.Sheets[worksheetName[0]];
        const rows = xlsx_1.default.utils.sheet_to_json(worksheet);
        return rows;
    }
    convertToBytes(megabytes) {
        return (0, bytes_1.default)(megabytes);
    }
};
HelperFileService = __decorate([
    (0, common_1.Injectable)()
], HelperFileService);
exports.HelperFileService = HelperFileService;
//# sourceMappingURL=helper.file.service.js.map