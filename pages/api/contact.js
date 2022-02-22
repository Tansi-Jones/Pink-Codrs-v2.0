import nodemailer from "nodemailer";

export default function handler(req, res) {
  const { email, name, subject, message } = req.body;
  // form validaation
  if (
    email === "" ||
    name === "" ||
    subject === "" ||
    message === "" ||
    occupation === ""
  ) {
    return res.send("⚠️ Please fill out all fields");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
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
    html: `
    <body
    style="
      font-family: sans-serif;
      width: 70%;
      margin: 0 auto;
    "
  >
    <p style="color: #324054; font-size: 20px">
      <span>Name: </span>
      <code style="color: #e81a6b">${req.body.name}</code>
    </p>
    <p style="color: #324054; font-size: 20px">
      <span>Occupation: </span>
      <code style="color: #e81a6b">${req.body.occupation}</code>
    </p>
    <p style="color: #324054; font-size: 20px">
      <span>Subject: </span>
      <code style="color: #e81a6b">${req.body.subject}</code>
    </p>

    <p style="color: #324054; font-size: 20px; margin-top: 50px">
    ${req.body.message}
    </p>

    <p style="color: #324054; font-size: 20px; margin-top: 50px">
      Best Regards.
    </p>
    <a href="/" style="text-decoration: none">
      <code style="color: #e81a6b; font-size: 15px"
        >Sent from Pink Codrs Website</code
      >
    </a>
  </body>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("❌ Failed to send");
    } else {
      // console.log("Email sent: " + info.response);
      res.send("✅ Message sent");
    }
  });
}
