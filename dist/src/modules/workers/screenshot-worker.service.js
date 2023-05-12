"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenshotWorkerService = void 0;
const common_1 = require("@nestjs/common");
const screenshot_worker_1 = require("../stock/services/screenshot-worker");
let ScreenshotWorkerService = class ScreenshotWorkerService {
    constructor() {
        this.maxWorkerCount = 20;
        this.activeWorkers = [];
        this.onWorkerComplete = (worker) => {
            const index = this.activeWorkers.indexOf(worker);
            if (index > -1) {
                this.activeWorkers.splice(index, 1);
            }
        };
    }
    async processScreenshot(stock) {
        if (this.activeWorkers.length < this.maxWorkerCount) {
            const worker = new screenshot_worker_1.ScreenshotWorker(stock);
            this.activeWorkers.push(worker);
            await worker.run();
        }
        else {
            console.log('Worker pool is full.');
        }
    }
};
ScreenshotWorkerService = __decorate([
    (0, common_1.Injectable)()
], ScreenshotWorkerService);
exports.ScreenshotWorkerService = ScreenshotWorkerService;
//# sourceMappingURL=screenshot-worker.service.js.map