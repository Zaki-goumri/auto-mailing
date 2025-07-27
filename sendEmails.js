const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "zakariagoumri213@gmail.com",
    pass: "awdb emne rsfu afhd",
  },
});

async function sendApplications(emails) {
  for (const email of emails) {
    const mailOptions = {
      from: '"Zakaria Goumri" <zakariagoumri213@gmail.com>',
      to: email,
      subject: "Application for Backend Developer Role – Zakaria Goumri",
      text: `Dear Hiring Team,

I hope this message finds you well.

My name is Zakaria Goumri, and I’m a backend developer with hands-on experience building scalable backend systems using NestJS, PostgreSQL, Redis, and Elasticsearch. I'm reaching out to express my interest in any available roles that match this profile within your organization.

I’ve worked on several backend-focused projects, including participation in national hackathons, where I contributed to systems involving real-time data processing, microservices, and integrations with modern DevOps stacks. I value clean architecture, maintainability, and practical solutions over buzzwords.

You can find my portfolio here: https://zakariagoumri.vercel.app/
It includes links to my GitHub and LinkedIn profiles for further reference.

I've also attached my CV for more details on my experience and skills. I’m open to both remote and on-site opportunities, and I’d appreciate the chance to discuss how I can contribute to your team.

Thank you for your time and consideration.

Best regards,  
Zakaria Goumri  
zakariagoumri213@gmail.com  
+213 560620999`,
      attachments: [
        {
          filename: "Zakaria_Goumri_Resume.pdf",
          path: "./myResume.pdf",
        },
      ],
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(`✅ Sent to ${email}`);
    } catch (error) {
      console.error(`❌ Failed for ${email}: ${error.message}`);
    }

    const wait = Math.floor(40000 + Math.random() * 20000);
    console.log(`⏳ Waiting ${wait / 1000} seconds...\n`);
    await delay(wait);
  }
}

app.post("/send-emails", async (req, res) => {
  const { emails } = req.body;
  if (!Array.isArray(emails) || emails.length === 0) {
    return res.status(400).json({ error: "Please provide a non-empty 'emails' array in the request body." });
  }
  sendApplications(emails)
    .then(() => res.json({ message: "Emails sent (or attempted) to all provided addresses." }))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
