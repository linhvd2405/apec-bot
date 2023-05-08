"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockService = void 0;
const common_1 = require("@nestjs/common");
const stock_repository_1 = require("../repositories/stock.repository");
const screenshot_worker_service_1 = require("../../workers/screenshot-worker.service");
let StockService = class StockService {
    constructor(stockRepository, screenshotWorkerService) {
        this.stockRepository = stockRepository;
        this.screenshotWorkerService = screenshotWorkerService;
    }
    async findAll(find, options) {
        return this.stockRepository.findAll(find, options);
    }
    async findOneById(_id, options) {
        return this.stockRepository.findOneById(_id, options);
    }
    async findOne(find, options) {
        return this.stockRepository.findOne(find, options);
    }
    async getTotal(find, options) {
        return this.stockRepository.getTotal(find, options);
    }
    async exists(stockCode, options) {
        return this.stockRepository.exists({
            stockCode: {
                $regex: new RegExp(stockCode),
                $options: 'i',
            },
        }, options);
    }
    async create({ status, stockCode, nameCompany, exchangeCode, rating, industry, refPrice, liquidity, shortTrend, targetPrice, cutlossPrice, trandingDate, overview, marketCapital, sumVol10d, outstandingShares, eps, pe, de, roe, netRev, netInc, debt, loan, cfi, cfo, cff, stockCodes, reportDate, adx, rsi, macd, }, options) {
        const create = {
            status,
            stockCode,
            nameCompany,
            exchangeCode,
            rating,
            industry,
            refPrice,
            liquidity,
            shortTrend,
            targetPrice,
            cutlossPrice,
            trandingDate,
            overview,
            marketCapital,
            sumVol10d,
            outstandingShares,
            eps,
            pe,
            de,
            roe,
            netRev,
            netInc,
            debt,
            loan,
            cfi,
            cfo,
            cff,
            stockCodes,
            reportDate,
            adx,
            rsi,
            macd,
            isActive: true,
        };
        create.status = 0;
        return this.stockRepository.create(create, options);
    }
    async screenshot(stock) {
        this.screenshotWorkerService.processScreenshot(stock);
    }
    async update(_id, { status, stockCode, nameCompany, exchangeCode, rating, industry, refPrice, liquidity, shortTrend, targetPrice, cutlossPrice, trandingDate, overview, marketCapital, sumVol10d, outstandingShares, eps, pe, de, roe, netRev, netInc, debt, loan, cfi, cfo, cff, stockCodes, reportDate, adx, rsi, macd, }, options) {
        const update = {
            status,
            stockCode,
            nameCompany,
            exchangeCode,
            rating,
            industry,
            refPrice,
            liquidity,
            shortTrend,
            targetPrice,
            cutlossPrice,
            trandingDate,
            overview,
            marketCapital,
            sumVol10d,
            outstandingShares,
            eps,
            pe,
            de,
            roe,
            netRev,
            netInc,
            debt,
            loan,
            cfi,
            cfo,
            cff,
            stockCodes,
            reportDate,
            adx,
            rsi,
            macd,
        };
        return this.stockRepository.updateOneById(_id, update, options);
    }
    async inactive(_id, options) {
        const update = {
            isActive: false,
        };
        return this.stockRepository.updateOneById(_id, update, options);
    }
    async active(_id, options) {
        const update = {
            isActive: true,
        };
        return this.stockRepository.updateOneById(_id, update, options);
    }
    async deleteOneById(_id, options) {
        return this.stockRepository.deleteOneById(_id, options);
    }
    async deleteOne(find, options) {
        return this.stockRepository.deleteOne(find, options);
    }
};
StockService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [stock_repository_1.StockRepository,
        screenshot_worker_service_1.ScreenshotWorkerService])
], StockService);
exports.StockService = StockService;
//# sourceMappingURL=stock.service.js.map