"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var patterm = {
    name: function (name) {
        return /^[a-zA-Z]{3,}$/.test(name) ? true : "Nome inválido";
    },
    email: function (email) {
        return /[@][a-z]{3,}[.][a-z]{3,}/.test(email) ? true : "E-mail inválido";
    },
    password: function (Password) {
        return /^[a-zA-Z0-9]{3,}$/.test(Password) ? true : "Senha inválida";
    }
};
function validateRequestBody(requestBody) {
    var errors = {};
    for (var property in requestBody) {
        var item = requestBody[property];
        var validate = patterm[property];
        var hasValidated = validate(item);
        if (hasValidated !== true) {
            errors[property] = (hasValidated);
        }
    }
    return errors;
}
exports.default = validateRequestBody;
