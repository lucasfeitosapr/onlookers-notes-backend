import axios from 'axios'

const API_URL = 'http://localhost:3000/users-posts'

async function getAllUsersPosts() {
    const res = await axios.get(API_URL);
    const usersPosts = res.data;
    return usersPosts;
}

export { getAllUsersPosts };