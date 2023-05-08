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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseOptionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("@nestjs/config");
let DatabaseOptionsService = class DatabaseOptionsService {
    constructor(configService) {
        this.configService = configService;
        this.env = this.configService.get('app.env');
        this.host = this.configService.get('database.host');
        this.database = this.configService.get('database.name');
        this.user = this.configService.get('database.user');
        this.password = this.configService.get('database.password');
        this.debug = this.configService.get('database.debug');
        this.options = this.configService.get('database.options')
            ? `?${this.configService.get('database.options')}`
            : '';
    }
    createMongooseOptions() {
        let uri = `mongodb://${this.host}`;
        if (this.database) {
            uri = `${uri}/${this.database}${this.options}`;
        }
        if (this.env !== 'production') {
            mongoose_1.default.set('debug', this.debug);
        }
        const mongooseOptions = {
            uri,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 50000
        };
        if (this.user && this.password) {
            mongooseOptions.auth = {
                username: this.user,
                password: this.password,
            };
        }
        console.log({ mongooseOptions });
        return mongooseOptions;
    }
};
DatabaseOptionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], DatabaseOptionsService);
exports.DatabaseOptionsService = DatabaseOptionsService;
//# sourceMappingURL=database.options.service.js.map