import nodemailer from "nodemailer";

export default function handler(req, res) {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.emai",
    port: 587,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "tansijones@gmail.com",
    subject: req.body.subject,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("Failed to send");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Success");
    }
  });
}
