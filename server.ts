import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.domeneshop.no",
  port: 587,
  secure: false,
  auth: {
    user: process.env.DOMENESHOP_EMAIL,
    pass: process.env.DOMENESHOP_PASSWORD,
  },
});

app.post("/send-email", async (req: Request, res: Response) => {
  const { name, email, phoneNumber, message } = req.body;

  const mailOptions = {
    from: process.env.DOMENESHOP_EMAIL,
    to: process.env.RECEIVER_EMAIL,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\nMessage: ${message}`,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
