// generics

function append <T>(el: T, list: T[]): T[] {
  return list.concat(el)
}

const appendArrow = <T>(el: T, list: T[]): T[] =>{
    return list.concat(el)
}

function printLength <T extends {length: number}>(arg: T): number{
    return arg.length
}

printLength('adsad');
printLength([])

// keyof

type WindowProp = keyof Window

const closeWindow :WindowProp = 'close'
 
interface PC {
    brand: string,
    year: number
}

const MacBook: PC = {
    brand: 'Apple',
    year: 2022
}

type Laptop = keyof PC

const macbookCharacterictic : Laptop = 'brand'

type Value = keyof [string, number]

const value1: Value = '0'

function prop <T, U extends keyof T>(key: U, obj: T): T[U]{
    return obj[key]
}

prop('brand', MacBook) // 'Apple'