"use strict";
// generics
function append(el, list) {
    return list.concat(el);
}
const appendArrow = (el, list) => {
    return list.concat(el);
};
function printLength(arg) {
    return arg.length;
}
printLength('adsad');
printLength([]);
const closeWindow = 'close';
const MacBook = {
    brand: 'Apple',
    year: 2022
};
const macbookCharacterictic = 'brand';
const value1 = '0';
function prop(key, obj) {
    return obj[key];
}
prop('brand', MacBook);
