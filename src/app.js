//const {emailTemplate} =  require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
//const {getUserById} = require('./js-foundation/03-callbacks');
//const {buildMakePerson} = require('./js-foundation/05-factory');
  const getPokemonById = require('./js-foundation/06-promises');

  getPokemonById(4)
  .then((pokemon) => console.log({pokemon}))
  .catch((error) => console.log("intente de nuevo"))
  .finally(() => console.log("fin de la promesa"));


 























// ! referencia a la funcion factory y uso
// const {getAge, getUUID} = require('./plugins')

// const makePerson = buildMakePerson({getAge, getUUID});

// const obj  = {name: 'John', birthdate: '1994-03-07'};

// const john = makePerson(obj);

// console.log(john);

// const id = 1;

// getUserById(id, (error, user) => {
//     if (error) {
//         throw new Error(error);
//     }  
//     console.log(user);    
// });