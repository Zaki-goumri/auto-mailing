const nodemailer = require("nodemailer");

const emails = [
  "jobs@accelhr.com",
  "recruit@bacme.com",
  "info@charterhouse.ae",
  "adeccoae.info@adecco.com",
  "helpinghandsathr@outlook.com",
  "nikki@nssearch.com",
  "fm@melf.ae",
  "finance@coralboutiquevilla.com",
  "hr@alkhaleejpalacedeira.ae",
  "emiratisation@michealpage.ae",
  "hr@tafaseel.ae",
  "recruitment@taleem.ae",
  "talent@ergodubai.com",
  "careers@infiniconcepts.com",
  "info@ratlscontracting.com",
  "judy@emiratalent.com",
  "michelle@emiratalent.com",
  "cess@emiratalent.com",
  "maxime.lejuez@babylondifc.com",
  "kenette.s@naischool.ae",
  "hr@alimousa.ae",
  "syed.naveed@itpeoplegulf.com",
  "cv@primegroup.ae",
  "hazem.sara@jac.ae",
  "hr@vplaceugulfjobs.com",
  "hr@avenuehoteldubai.com",
  "luxury@hrsource.ae",
  "career@baytik.ae",
  "careers@terrasolisdubai.com",
  "hr@prestigeluxury.ae",
  "hr.leb@citruss.com",
  "careers@vivandi.ae",
  "mhnewbiz@gmail.com",
  "ankitha@medichrc.com",
  "career@abcrecruitment.ae",
  "hireme@eyewa.com",
  "hr@able.ae",
  "cv@careerhubinternational.com",
  "amara.ghafoor@gmail.com",
  "recruit@dib.ae",
  "careers@woodlemdubai.ae",
  "careers@springfield-re.com",
  "careers.mdab@milleniumhotels.com",
  "ha9q6-cr@accor.com",
  "recruitment@angloarabian-healthcare.com",
  "info@deltaoilgasjobs.com",
  "mc.secratary@habtoorhospitality.com",
  "hr.metclub@habtoorhopitality.com",
  "syeda.a@casamiauae.com",
  "shahin@derbygroup.ae",
  "abid.ali@meydanhotels.com",
  "mahek@pactemloyment.ae",
  "careers@inaya.ae",
  "careers@arabiancementcompany.com",
  "sara.mohamed@armadagroupco.com",
  "british_grammarschool@yahoo.com",
  "salah.khalil@movenpick.com",
  "george@kingstonstanley.com",
  "wenona@kinstonstanley.com",
  "sumal.mohan@ardt.ae",
  "hr@hialbarsha.com",
  "vineyard@eim.ae",
  "career@specenergy.com",
  "hr@alghurair.com",
  "maryaj@ajmal.net",
  "vacantderma@gmail.com",
  "careers@nabooda-auto.com",
  "careers@alansari.ae",
  "resume@candidzone.net",
  "hrad@gateshospitality.com",
  "info@carino.ae",
  "jobs@briteconsult.com",
  "hr@erc.ae",
  "careers@jannah-hotels.com",
  "hrd.exe14@psinv.net",
  "hr@slhr-uae.com",
  "recruitment@hskhospitality.com",
  "hr.ae@speedaf.com",
];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "zakariagoumri213@gmail.com",
    pass: "awdb emne rsfu afhd",
  },
});

async function sendApplications() {
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

sendApplications();
