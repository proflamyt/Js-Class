import express, {Express ,Request, Response } from "express";
import nodemailer, { SentMessageInfo } from "nodemailer";
import fs from "fs";
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
app.use(express.urlencoded({ extended: true }));

app.get("/register", function (req: Request, res: Response) {
  res.status(200)
  .json({ result: "Register Here" });
});

app.post("/register", async function (req: any, res: any) {
  const { email, username } = req.body;

  if (!email || !username) {
    res.status(400).json({
      message: "Enter all fields",
    });
  } else {
    fs.appendFile(
      "newlyRegistered.txt",
      `
               User: ${username} just registered with email: ${email} `,
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

