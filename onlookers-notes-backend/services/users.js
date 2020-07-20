const axios = require('axios');

const getUsers = async () => {
    try{

        return await axios.get('http://jsonplaceholder.typicode.com/users');

    } catch (err) {
        console.log("err: ", err)
    }
}

exports.getUsers = getUsers;