import express, {Express ,Request, Response } from "express";
import nodemailer, { SentMessageInfo } from "nodemailer";
import fs from "fs";
const PORT: number = 8000;


var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "righteousnessakinbola@gmail.com",
    pass: "ybfulqmjhkvfawmv",
  },
});

var app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/register", function (req: Request, res: Response) {
  res.send(JSON.stringify({ result: "Register Here" }));
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
      from: "righteousnessakinbola@gmail.com",
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

