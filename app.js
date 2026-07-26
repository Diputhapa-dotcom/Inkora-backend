require('dotenv').config();
const express = require('express');
const { registerPost } = require('./controller/auth/registerController');
const { loginPost } = require('./controller/auth/loginController');
const {  profileGet, profilePost } = require('./controller/user/profileController');
const { isAuthentication } = require('./middleware/isAuthentication');
const cookieParser = require('cookie-parser');
const uploads = require('./middleware/storage');
const { addBlog } = require('./controller/blog/addBlogController');
const { singleBlogGet, home } = require('./controller/blog/homeController');
const app = express();
const port = 3000;
require('./model');


app.use(express.json());
app.use(express.urlencoded({ extended : true }))
app.use(cookieParser())


app.post("/user/register",registerPost);
app.post("/user/login",loginPost);
app.post("/user/profile",isAuthentication,profilePost);
app.get("/user/profile",isAuthentication,uploads.single("image"),profileGet);
app.post("/user/blog/add",isAuthentication,uploads.single("image"),addBlog);
app.get("/user/blog",home);
app.get("/user/blog/:id",singleBlogGet);




app.listen(port,()=>{
    console.log("The project has started at port",port);
})