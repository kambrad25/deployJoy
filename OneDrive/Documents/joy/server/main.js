const { log } = console;

const express = require("express");
const path = require("path");
const env = require("dotenv");
const cors = require("cors");
const fs = require("fs");
const cp = require("cookie-parser");

const ejs = require('ejs');



const app = express();

env.config();

app.set("view engine", 'ejs');


app.use(cors({
    origin: ["http://127.0.0.1:5501","http://localhost:5501", 'http://localhost:6500', 'http://127.0.0.1:6500'],
    methods: ['POST', 'GET'],
    allowedHeaders: ['Content-Type'],
    // preflightContinue: 204
}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));
app.use(cp("cookieparserjoy_p"))



let database=[];

let file = "./database.json";
if (fs.existsSync(file)) {
    database = JSON.parse(fs.readFileSync(file, 'utf-8'))
}

const save = () => {
    fs.writeFileSync(file, JSON.stringify(database, null, 5));
}


// app.use((req, res, next) => {
//     let err = {
//         status: 400,
//         msg: 'Database is empty'
//     };
//     if (req.originalUrl.endsWith("/")) {
//         let e = JSON.stringify(err).split(",")[1].split(":")[1].split("}")[0].split('"')[1].split('"')[0].toUpperCase()
//         let eresp = [err.status, e];
//         return res.status(eresp[0]).setHeader('content-type', 'text/html').send(`<h1 style='text-align: center; margin-top: 3rem; font-family: sans-serif;'>${eresp[1]}</h1>`)
//     }  
//     next()
// })


function display_db (req,res,next) {
    database.push({...req.body, date: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`});
    save();
}
// app.get("/", display_db, (req, res, next) => {
//    if (database.length === 0) {
//         next();
//    } else {
//     return res.status(200).json(JSON.stringify(database))
//    }
// })

app.get("/", (req, res, next) => {
    let db = "./database.json";
    if (req.url.endsWith("/")) {
        if (!fs.existsSync(db)) {
            let err = { status: 500, msg: "server error. get back with us later!"};
            next(err);
        }else {
            return res.status(200).render("index", { title: "jpauth"})
        }
    }
})

app.post("/mail/joypowell/v1/1", display_db);

app.get("/mail", (req, res) => {
    if (!req.cookies['authsess1']) {
        return res.status(302).redirect("/");
    }
    return res.status(200).render("data", { d: database})
})

app.post("/auth", (req, res) => {
    let { pw } = req.body;
    let apw = process.env.PASSWORD;
    if (pw !== apw) {
        return res.status(400).json({ status: 400, msg: "incorrect"});
    } else {
        return res.status(200).cookie("authsess1","cookiesuccess1", { httpOnly: true, secure: process.env.PRODUCTION == true, maxAge: 30000 }).json({ status: 200, msg: "correct"})
    }
})

// app.use((err,req,res,next) => {
//     if (err) {
//         return res.status(err.status).send(`<h1>${err.msg}</h1>`);
//     }
// })

const port = 6500;

app.listen(port, () => {
    log ('listened');
})


log(database)