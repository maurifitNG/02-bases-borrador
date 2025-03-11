const buildMakePerson = ({getAge, getUUID}) =>{

    return ({name, birthdate}) => {

    return {
        id: getUUID(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate)
    }
 }
}



// const john = buildPerson(obj);

// console.log(john);

module.exports = {buildMakePerson}