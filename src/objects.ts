interface Car{
    wheels: number,
    brand: string,
    type: string,
    model: string,
    isNew?: boolean
}

const car: Car = {
    wheels: 4,
    brand: "Skoda",
    type: "Crossover",
    model: "Oktavia"
}

function printPoint(point: {x:string, y: string}): void{
    console.log(`Coordinate of the point is x: ${point.x} and y: ${point.y}`)
}

const obj1 = {
    x: '1',
    y: '1',
    z: '1'
}

printPoint(obj1) 

function printName(user:{
    firstName: string,
    lastName?: string,
}): void{
    console.log('hello', user.firstName.toUpperCase())
    if(user.lastName){
        console.log('nice to meet u Mr. ', user.lastName.toUpperCase())
    }
}

printName({firstName: 'Vlad'})
printName({firstName: 'Vlad', lastName: 'Mazurenko'})