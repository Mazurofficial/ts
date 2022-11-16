"use strict";
// Опишите типы для двух функций:
Object.defineProperty(exports, "__esModule", { value: true });
exports.values = exports.keys = void 0;
function keys(obj) {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
exports.keys = keys;
function values(obj) {
    const currentValues = [];
    for (let key in obj) {
        currentValues.push(obj[key]);
    }
    return currentValues;
}
exports.values = values;
console.log(keys({ a: 1, b: 2 }), values({ a: 1, b: 2 }));
keys({ a: 1, b: 2 });
values({ a: 1, b: 2 });
