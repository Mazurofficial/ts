"use strict";
// Создайте интерфейсы User и Admin.
function login(user) {
    if (user.login.length && user.password.length) {
        console.log('Hello, nice to see you !)');
    }
}
const user1 = {
    login: 'mazurOk',
    email: 'vladmazurenko@gmail.com',
    password: '12345mazur',
    isOnline: false,
    lastVisited: new Date(2022, 11, 9)
};
const admin1 = {
    login: 'mazurOk',
    email: 'vladmazurenko@gmail.com',
    password: '12345mazur',
    isOnline: false,
    lastVisited: new Date(2022, 11, 9),
    role: 'administrator '
};
