import sgMail from "@sendgrid/mail";

const apiKey = `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`;
sgMail.setApiKey(apiKey);

export default function handler(req, res) {
  const { email, organization, representative } = req.body;

  const msg = {
    to: ["apinkcodrsafrica@gmail.com"],
    from: "info@pinkcodrs.africa",
    subject: req.body.category,
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
  sgMail
    .send(msg)
    .then(() => {
      ("SendGrid Mail has been sent");
    })
    .catch((error) => {
      console.error("Mail not been sent", error.message);
    });

  res.status(200).json({ message: "Mail sent successfully" });
}
