import express, {Express ,Request, Response } from "express";
import nodemailer, { SentMessageInfo } from "nodemailer";
import fs from "fs";
import cookieParser from "cookie-parser";
const PORT: number = 8000;
require('dotenv').config()


var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  },
});

var app: Express = express();
app.use(express.json());
app.use(cookieParser())
// app.use(express.urlencoded({ extended: true }));

app.get("/register", function (req: Request, res: Response) {
  res.status(200)
  .json({ result: "Register Here" });
});

app.get("/register/user/email", function (req: Request, res: Response) {
  fs.readFile('newlyRegistered.txt',  'utf8', (err:any, data:any)=>{
    if (err){
      console.log(err);
      return;
    }
    var hehe = JSON.parse(data)
    res.status(200)
  .json({ result : hehe["email"] });
  }) 
});

app.get("/register/user", function (req: Request, res: Response) {
  res.status(200)
  .json({ result : req.cookies['name_of_user'] });
});


app.post("/register", async function (req: Request, res: Response) {
  const { email, username } = req.body;
 
  if (!email || !username) {
    res.status(400).json({
      message: "Enter all fields",
    });
  } else {

    res.cookie('name_of_user', `${username}`);

   const newData = JSON.stringify({User : `${username}`,
                    email : `${email}`})
    fs.writeFile(
      "newlyRegistered.txt",
      `${newData}`,
      function (err: any) {
        if (err) throw err;
        console.log("User Saved!");
      }
    );


    var mailOption = {
      from: process.env.USER,
      to: email,
      subject: "Registration Confirmation",
      text: `Welcome ${username} your email is ${email}`,
    };

    const ola = new Promise((resolve, reject) => {
      transporter.sendMail(mailOption, function (error: Error | null, info: SentMessageInfo): void {
        if (error) {
         reject(error);
        } else {
          console.log("Email sent: " + info.response);
          resolve(info);
        }
      });
    });
    console.log(await ola);


    res.status(200).json({
      status: "OK",
    });
  }
});

async function startApp() {
    try {
        app.listen(PORT);
        console.log(`Server is running on ${PORT}`);
    } catch (error: any) {
        console.log(error);
    }
}

startApp();

