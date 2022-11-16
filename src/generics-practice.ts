// Опишите типы для двух функций:

export function keys<T extends object>(obj: T) : Array<keyof T> {
  const currentKeys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }
  return currentKeys;
}

export function values<T extends object>(obj: T) : Array<T[keyof T]> {
  const currentValues = [];
  for (let key in obj) {
    currentValues.push(obj[key]);
  }
  return currentValues;
}

console.log(keys({a: 1, b: 2}),values({a: 1, b: 2}))
keys({a: 1, b: 2})
values({a: 1, b: 2})

// ex.2
//Опишите типы для следующей функции:

export function createMap<T>(list: T[]){
  return function<U>(cb: (x: T) => U): U[] {
    const result = [];

    for (let el of list) {
      result.push(cb(el))
    }

    return result;
  }
}

