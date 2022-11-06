// Дан union-тип Level с уровнями позиция для разработчиков. Он же назначен для интерфейса Developer.

// Необходимо создать функцию gradeDeveloper, которая будет принимать объект пользователя с ключом level и новый уровень. В теле функции для полученного объекта должен назначаться следующий уровень.

type Level = 'junior' | 'middle' | 'senior';
 
interface Developer {
  login: string,
  skills: string[],
  level: Level, 
}
 
// create a function that change level of incoming developer
function gradeDeveloper(developer: Developer, newLevel: Level) {
    developer.level = newLevel
}

const dev1: Developer = {
    login: 'vladon',
    skills: ['react', 'redux'],
    level: 'junior'
}

console.log(gradeDeveloper(dev1, 'senior'))