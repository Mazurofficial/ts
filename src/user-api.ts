// Создайте интерфейсы User и Admin.

// User должен содержать следующие ключи:

// login, email, password, isOnline, lastVisited
// Admin содержит все те же ключи, плюс ключ role.

// Создайте функцию login, которая принимает один параметр в виде объекта с логином и паролем.

// Проверьте, что поля не пустые и выведите приветственное сообщение в консоль.

interface User{
    login: string,
    email: string,
    password: string,
    isOnline: boolean,
    lastVisited: Date,
}

interface Admin{
    login: string,
    email: string,
    password: string,
    isOnline: boolean,
    lastVisited: Date,
    role: string
}

function login(user: {login: string, password: string}):void{
    if(user.login.length && user.password.length){
        console.log('Hello, nice to see you !)')
    }
}

const user1: User = {
    login: 'mazurOk',
    email: 'vladmazurenko@gmail.com',
    password: '12345mazur',
    isOnline: false,
    lastVisited: new Date(2022, 11, 9)
}

const admin1: Admin = {
    login: 'mazurOk',
    email: 'vladmazurenko@gmail.com',
    password: '12345mazur',
    isOnline: false,
    lastVisited: new Date(2022, 11, 9),
    role: 'administrator '
}

login(admin1)