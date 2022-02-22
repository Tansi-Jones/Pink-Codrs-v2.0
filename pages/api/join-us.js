import nodemailer from "nodemailer";

export default function handler(req, res) {
  const { email, name, country } = req.body;

  //   form validation
  if ((email === "" || name === "", country === ""))
    return res.send("⚠️ Please fill out all the fields");

  // post registration
  switch (req.method) {
    case "GET":
      try {
      } catch (error) {}
      break;

    case "POST":
      try {
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
          subject: "NEW REGISTRATION",
          html: `
            <body
            style="
              font-family: sans-serif;
              width: 70%;
              margin: 0 auto;
            "
          >
          <h1>${req.body.name} just registered</h1>
            
            <p style="color: #324054; font-size: 20px">
              <span>email: </span>
              <code style="color: #e81a6b">${req.body.email}</code>
            </p>
            <p style="color: #324054; font-size: 20px">
              <span>Country: </span>
              <code style="color: #e81a6b">${req.body.country}</code>
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
            res.send("❌ Failed to register");
          } else {
            // console.log("Email sent: " + info.response);
            res.send("✅ Registration sucessful");
          }
        });
      } catch (error) {
        res.send("❌ Couldn't Register");
        res.status(401).json({ message: "couldn't register" });
      }
      break;

    default:
      res.status(401).json({ message: "Wrong method" });
      break;
  }
}
