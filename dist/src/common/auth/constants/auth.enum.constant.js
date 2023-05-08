"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENUM_AUTH_DESCRPITION = exports.ENUM_AUTH_DESCRPITION_DEFAULT = exports.ENUM_AUTH_ACCESS_FOR = exports.ENUM_AUTH_ACCESS_FOR_DEFAULT = exports.ENUM_AUTH_ACCESS_FOR_SUPER_ADMIN = void 0;
var ENUM_AUTH_ACCESS_FOR_SUPER_ADMIN;
(function (ENUM_AUTH_ACCESS_FOR_SUPER_ADMIN) {
    ENUM_AUTH_ACCESS_FOR_SUPER_ADMIN["SUPER_ADMIN"] = "SUPER_ADMIN";
})(ENUM_AUTH_ACCESS_FOR_SUPER_ADMIN = exports.ENUM_AUTH_ACCESS_FOR_SUPER_ADMIN || (exports.ENUM_AUTH_ACCESS_FOR_SUPER_ADMIN = {}));
var ENUM_AUTH_ACCESS_FOR_DEFAULT;
(function (ENUM_AUTH_ACCESS_FOR_DEFAULT) {
    ENUM_AUTH_ACCESS_FOR_DEFAULT["USER"] = "USER";
    ENUM_AUTH_ACCESS_FOR_DEFAULT["ADMIN"] = "ADMIN";
    ENUM_AUTH_ACCESS_FOR_DEFAULT["BOT_RECIVE"] = "BOT_RECIVE";
    ENUM_AUTH_ACCESS_FOR_DEFAULT["BOT_SEND"] = "BOT_SEND";
})(ENUM_AUTH_ACCESS_FOR_DEFAULT = exports.ENUM_AUTH_ACCESS_FOR_DEFAULT || (exports.ENUM_AUTH_ACCESS_FOR_DEFAULT = {}));
exports.ENUM_AUTH_ACCESS_FOR = {
    ...ENUM_AUTH_ACCESS_FOR_SUPER_ADMIN,
    ...ENUM_AUTH_ACCESS_FOR_DEFAULT,
};
var ENUM_AUTH_DESCRPITION_DEFAULT;
(function (ENUM_AUTH_DESCRPITION_DEFAULT) {
    ENUM_AUTH_DESCRPITION_DEFAULT["READ"] = "READ";
    ENUM_AUTH_DESCRPITION_DEFAULT["WRITE"] = "WRITE";
    ENUM_AUTH_DESCRPITION_DEFAULT["RECIVE"] = "RECIVE";
    ENUM_AUTH_DESCRPITION_DEFAULT["SEND"] = "SEND";
})(ENUM_AUTH_DESCRPITION_DEFAULT = exports.ENUM_AUTH_DESCRPITION_DEFAULT || (exports.ENUM_AUTH_DESCRPITION_DEFAULT = {}));
exports.ENUM_AUTH_DESCRPITION = {
    ...ENUM_AUTH_DESCRPITION_DEFAULT
};
//# sourceMappingURL=auth.enum.constant.js.map