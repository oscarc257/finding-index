/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
    // Use the find method to locate the first object with the matching username
    return usersArray.find(function(user){
        return user.username === username;
    });
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
    // Find the index of the user with the given username
    const index = usersArray.findIndex(function(user) {
        return user.username === username;
    });

    // If the user is found, remove them from the array
    if (index === -1) return;

    return usersArray.splice(index, 1)[0];

    
    
    // else {
    //     // If the user is not found, return undefined
    //     return undefined;
    // }

    // // Return the modified array
    // return usersArray;
}