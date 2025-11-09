const express=require("express");
const app=express();
const userModel=require("./models/user.js");
const path=require("path");
const cookieParser=require("cookie-parser");
const bcrypt=require("bcrypt");
const { hash } = require("crypto");
const jwt=require("jsonwebtoken");

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


const nodemailer=require("nodemailer");
const transporter=nodemailer.createTransport({
    secure:true,
    host:"smtp.gmail.com",
    port:465,
    auth:{
        user:"Your email-id",
        pass:"Password",
    }
})

const mongoose=require("mongoose");
main()
    .then(()=>{
        console.log("Database mil gaya bhai");
        console.log("ab localhost khol le");
    })
    .catch((err)=>{
        console.log(err);
    })

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/database");
}

app.get('/',(req,res)=>{
    res.render('auth.ejs');
})

app.post('/create',async (req,res)=>{
    let {username,email,password}=req.body

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt, async(err,hash) => {
            let crestedUser=await userModel.create({
                username,
                email,
                password:hash
            })

            let token=jwt.sign({email},"shhhhhh");
            res.cookie("token",token)

            res.send(`<h1>Welcome Mr/Ms ${crestedUser.username}</h1>`);

            await transporter.sendMail({
                to:"User email-id",
                subject: "New User Registered:",
                text: `A new user just signed up!\n\nName: ${req.body.username}\nEmail: ${req.body.email}`
            })

            await transporter.sendMail({
                from:"Admin email-id",
                to:req.body.email,
                subject: "welcome to WanderLust:",
                text: `Hello ${req.body.username} you have just successfully signed up to wander lust. kindly use these params to log in\n\n email: ${req.body.email}\npassword ${req.body.password}`
            })
        })
    })
})

app.post('/exist',async (req,res)=>{
    let user=await userModel.findOne({email: req.body.email});
    if(!user) return res.send("something went wrong");
    bcrypt.compare(req.body.password, user.password, (err,result)=>{
        if(result) return res.send(`<h1>Welcome Back Mr/Ms ${user.username}</h1>`) ;
        else return res.send("something went wrong");
    })
})



app.listen(9000,()=>{
    console.log("Everuthing is okay");
})