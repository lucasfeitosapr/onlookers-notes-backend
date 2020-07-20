var express = require("express");
var fs = require("fs").promises;
var app = express();
var usersRouter = require("./routes/users-posts")
var cors = require('cors')

global.fileName = "users-with-posts.json";

const ENOENT_ERROR = "ENOENT";

let allUsers = '';
let allPosts = '';
let allUsersDict = new Object();

app.use(cors());
app.use(express.json());
app.use("/users-posts", usersRouter);

const usersService = require("./services/users")
const postsService = require("./services/posts")


app.listen(3000, async () => {
    try {

        await fs.readFile(global.fileName, "utf8");

        console.log("Welcome to: Onlooker's notes API!");  

    } catch (err) {
        console.log("Well, something went wrog: ", err);
        if(err.code == ENOENT_ERROR){
            console.log("Don't worry, I can fix it on my own!");
            const initialJson = {
            };
            fs.writeFile(global.fileName, JSON.stringify(initialJson)).catch(err => {
                console.log('Could not create file: ', err);
            });
        }  
    }

    try {
        await usersService.getUsers().then(users => {

            allUsers = users.data
    
        });
    
        await postsService.getPosts().then(posts => {
    
           allPosts = posts.data
    
        });
    
    
        allUsers.forEach(user => {
            allUsersDict[user.id] = {user: user};
        })
    
        allPosts.forEach(post => {
            try {
                allUsersDict[post.userId]['user']['posts'].push(post);
            } catch (err) {
                allUsersDict[post.userId]['user']['posts'] = [post];
            }  
        })
        
        await fs.writeFile(global.fileName, JSON.stringify(allUsersDict))
    
    } catch (err) {
        console.log("Well, something went wrog: ", err);
    }
    

    
});