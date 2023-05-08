"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenshotWorker = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome_1 = __importDefault(require("selenium-webdriver/chrome"));
const fs = __importStar(require("fs"));
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
class ScreenshotWorker {
    constructor(stock) {
        this.stock = stock;
    }
    async run() {
        const driver = await new selenium_webdriver_1.Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome_1.default.Options()
            .headless()
            .windowSize({ width: 900, height: 12000 }))
            .build();
        try {
            await driver.get(`http://localhost:3000/${this.stock._id.toString()}`);
            await driver.sleep(3000);
            const bodyElement = await driver.findElement(selenium_webdriver_1.By.css('#container > div'));
            const screenshot = await bodyElement.takeScreenshot();
            fs.writeFileSync(`src/public/assets/img/img.web/${this.stock.stockCode}.jpg`, screenshot, 'base64');
            console.log(`Screenshot taken successfully for ${this.stock.stockCode}`);
            const formData = new form_data_1.default();
            const imageFile = await fs.promises.readFile(`src/public/assets/img/img.web/${this.stock.stockCode}.jpg`);
            formData.append('file', imageFile, { filename: `${this.stock.stockCode}.jpg` });
            formData.append('_id', this.stock._id.toString());
            const response = await axios_1.default.post('https://7e54-118-71-105-160.ngrok-free.app/api/v1/jobs/uploadfile/', formData, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                maxContentLength: Infinity,
                maxBodyLength: Infinity,
            });
            console.log('Response:', response.data);
            this.stock.status = 1;
        }
        catch (error) {
            this.stock.status = -1;
            console.error(error);
        }
        finally {
            await driver.quit();
        }
    }
}
exports.ScreenshotWorker = ScreenshotWorker;
//# sourceMappingURL=screenshot-worker.js.map