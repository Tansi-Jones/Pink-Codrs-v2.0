import nodemailer from "nodemailer";

export default function handler(req, res) {
  const { email, organization, representative, category } = req.body;
  console.log(req.body);

  // form validaation
  if (email === "" || organization === "" || representative === "") {
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
    from: email,
    to: "tansijones@gmail.com",
    subject: category,
    html: `
    <body
    style="
      font-family: sans-serif;
      width: 70%;
      margin: 0 auto;
    ">
  <h1>${representative} just applied to work with us</h1>
    
    <p style="color: #324054; font-size: 20px">
      <span>email: </span>
      <code style="color: #e81a6b">${email}</code>
    </p>
    <p style="color: #324054; font-size: 20px">
      <span>Organization: </span>
      <code style="color: #e81a6b">${organization}</code>
    </p>
    <p style="color: #324054; font-size: 20px">
      <span>Representative: </span>
      <code style="color: #e81a6b">${representative}</code>
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
      res.send("✅ Application sent");
    }
  });
}
