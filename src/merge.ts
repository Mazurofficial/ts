// Создайте в двух вариантах (алиасах и интерфейсах) следующую структуру:

// Product : price, isNew, isSale, title
// Vehicle : wheels, year, brand
// Car: type, model +Product, +Vehicle

interface IProduct {
    price: number,
    isNew: boolean,
    isSale: boolean,
    title: string
}

interface IVehicle {
    wheels: number,
    year: number,
    brand: string
}

interface ICar extends IProduct, IVehicle {
    type: string,
    model: string
}

type Product = {
    price: number,
    isNew: boolean,
    isSale: boolean,
    title: string
}

type Vehicle = {
    wheels: number,
    year: number,
    brand: string
}

type Car = {
    type: string,
    model: string
} & Product & Vehicle

const masserati1: ICar = {
    price: 200000,
    isNew: true,
    isSale: false,
    title: 'Car',
    wheels: 4,
    year: 2022,
    brand: 'Masserati',
    type: 'sportcar',
    model: 'Turbo'
}

const masserati2: Car = {
    price: 200000,
    isNew: true,
    isSale: false,
    title: 'Car',
    wheels: 4,
    year: 2022,
    brand: 'Masserati',
    type: 'sportcar',
    model: 'Turbo'
}