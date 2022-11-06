"use strict";
// Дан union-тип Level с уровнями позиция для разработчиков. Он же назначен для интерфейса Developer.
// create a function that change level of incoming developer
function gradeDeveloper(developer, newLevel) {
    developer.level = newLevel;
}
const dev1 = {
    login: 'vladon',
    skills: ['react', 'redux'],
    level: 'junior'
};
console.log(gradeDeveloper(dev1, 'senior'));
