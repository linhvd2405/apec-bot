"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenshotWorker = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome_1 = __importDefault(require("selenium-webdriver/chrome"));
class ScreenshotWorker {
    constructor(stock) {
        this.stock = stock;
    }
    async run() {
        const driver = await new selenium_webdriver_1.Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome_1.default.Options()
            .windowSize({ width: 900, height: 12000 }))
            .build();
        try {
            const baseUrl = process.env.BASE_URL;
            await driver.get(`${baseUrl}/${this.stock._id.toString()}`);
            await driver.sleep(3000);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            await driver.quit();
        }
        console.log(this.stock.status);
    }
}
exports.ScreenshotWorker = ScreenshotWorker;
//# sourceMappingURL=screenshot-worker.js.map