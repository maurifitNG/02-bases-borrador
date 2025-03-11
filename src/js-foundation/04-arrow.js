const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

const getUserById = (id, callback) => {
    
    const user = users.find((user) =>{
        return user.id === id;
    });
    if (!user){
        return callback(`USUARIO NO ENCONTRADO con el id: ${id}`);
    }

    return callback(null, user);
} 

module.exports = {
    getUserById
}