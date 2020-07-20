const axios = require('axios');

const getPosts = async () => {
    try{

        return await axios.get('http://jsonplaceholder.typicode.com/posts');

    } catch (err) {
        console.log("err: ", err)
    }
}

exports.getPosts = getPosts;