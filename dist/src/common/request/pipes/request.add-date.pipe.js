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
exports.RequestAddDatePipe = void 0;
const common_1 = require("@nestjs/common");
const helper_date_service_1 = require("../../helper/services/helper.date.service");
function RequestAddDatePipe(days) {
    let MixinRequestAddDatePipe = class MixinRequestAddDatePipe {
        constructor(helperDateService) {
            this.helperDateService = helperDateService;
        }
        async transform(value) {
            return this.helperDateService.forwardInDays(days, {
                fromDate: this.helperDateService.create({
                    date: value,
                }),
            });
        }
    };
    MixinRequestAddDatePipe = __decorate([
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [helper_date_service_1.HelperDateService])
    ], MixinRequestAddDatePipe);
    return (0, common_1.mixin)(MixinRequestAddDatePipe);
}
exports.RequestAddDatePipe = RequestAddDatePipe;
//# sourceMappingURL=request.add-date.pipe.js.map