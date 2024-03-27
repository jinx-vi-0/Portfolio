/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Adarsh's Portfolio",
  description:
    "A passionate full-stack developer dedicated  to turning ideas into cutting-edge web applications. With a passion for innovation and problem-solving, I excel at crafting intuitive, dynamic solutions that exceed expectations.",
  og: {
    title: "Adarsh's Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Adarsh Kumar",
  logo_name: "AdarshKumar",
  // nickname: "jinx_vi",
  subTitle:
    "A passionate full-stack developer dedicated  to turning ideas into cutting-edge web applications. With a passion for innovation and problem-solving, I excel at crafting intuitive, dynamic solutions that exceed expectations.",
  resumeLink: "",
  portfolio_repository: "https://github.com/jinx-vi-0/masterPortfolio",
  githubProfile: "https://github.com/jinx-vi-0",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/jinx-vi-0",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashutosh1919/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:adarshkumarmsay@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/_jinx_vi_",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Discord",
    link: "https://discord.com/users/jinx.vi#6738",
    fontAwesomeIcon: "fa-discord", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=x
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "fa-github",
          // style: {
          //   backgroundColor: "#000000"
          //   // color: "#F7DF1E",
          // },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "fa-git-alt",
          style: {
            backgroundColor: "#000000",
            color: "#f40101",
          },
        },
        {
          skillName: "Postman",
          imageSrc: "postman.png",
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "fa-node-js",
          style: {
            color: "#198d02",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "ExpressJs",
          imageSrc: "express.png",
        },
        // {
        //   skillName: "MySQL",
        //   imageSrc: "mysql.png",
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        {
          skillName: "VsCode",
          imageSrc: "vscode.png",
        },
        // {
        //   skillName: "Netlify",
        //   imageSrc: "netlify.png",
        // },
        // {
        //   skillName: "Replit",
        //   imageSrc: "replit.png",
        // },
        // {
        //   skillName: "Vercel",
        //   imageSrc: "vercel.png",
        // },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Codepen",
        //   fontAwesomeClassname: "fa-codepen",
        //   // style: {
        //   //   color: "#02569B",
        //   // },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        // "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        {
          skillName: "MySQL",
          imageSrc: "mysql.png",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Netlify",
          imageSrc: "netlify.png",
        },
        {
          skillName: "Replit",
          imageSrc: "replit.png",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Vercel",
          imageSrc: "vercel.png",
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      // iconifyClassname: "simple-icons:leetcode",
      imageSrc: "leetcode.png",
      // style: {
      //   color: "#F79F1B",
      // },
      profileLink: "https://leetcode.com/jinx_vi/",
    },
    {
      siteName: "Codeforces",
      // iconifyClassname: "simple-icons:codeforces",
      // style: {
      //   color: "#1F8ACB",
      // },
      imageSrc: "code-forces.png",
      profileLink: "https://codeforces.com/profile/jinx_vi",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/jinx_vi",
    },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    {
      siteName: "GfG",
      // iconifyClassname: "simple-icons:hackerearth",
      // style: {
      //   color: "#323754",
      // },
      imageSrc: "gfg.png",
      profileLink: "https://auth.geeksforgeeks.org/user/jinx_vi",
    },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/jinx_vi",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Institute of Engineering and Management Kolkata",
      subtitle: "B.Tech in Information Technology",
      logo_path: "iem_logo.png",
      alt_name: "IEM Kolkata",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, OOPS, CN etc.",
        "⚡ Apart from this, I have done courses on Cloud Computing and Full Stack Development.",
        // "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://iem.edu.in/",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    {
      title: "Java Programming",
      subtitle: "- Brandon Krakowsky",
      logo_path: "pen.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/MWUNN63YHRLB",
      alt_name: "University of Pennsylvania",
      color_code: "#fff",
    },
    {
      title: "C Programming",
      subtitle: "- Ira Pohl",
      logo_path: "ucsc.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/WVEXGXX4ZAUN",
      alt_name: "University of California, Santa Cruz",
      color_code: "#2A73CC",
    },
    {
      title: "Python Programming",
      subtitle: "- Charles Severance",
      logo_path: "mic.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/9E3C5QGLDJE8",
      alt_name: "University of Michigan",
      color_code: "#16537e",
    },
    {
      title: "HTML5",
      subtitle: "- Colleen van Lent",
      logo_path: "mic.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/66B6VZY2T6YL",
      alt_name: "University of Michigan",
      color_code: "#16537e",
    },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    {
      title: "GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1tKfHCo7zJ6ydZhD0zKjHjxtuptS1GfJf/view",
      alt_name: "GCCPP",
      color_code: "#4285F499",
    },
    {
      title: "GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1MKOHjj5tEv9aLr1vRJlHGnemhvr3n7dA/view",
      alt_name: "GCSJ",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have made significant contributions to the education sector by working with an online coaching company as a DSA (Data Structures and Algorithms) tutor. My commitment to the open-source ethos extends beyond mere participation; I've actively contributed to various projects and engaged in community initiatives like Caffeine and Code and Social Summer of Code. Through these experiences, I've honed not only my technical skills but also my ability to collaborate effectively and drive meaningful change within diverse environments.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Tutor",
          company: "Knights Institute of Technology",
          // company_url: "https://legatohealthtech.com/",
          logo_path: "teacher.png",
          duration: "Feb 2024 - PRESENT",
          location: "Remote",
          description:
            "In an online coaching environment, I taught Data Structures and Algorithms, developing comprehensive course materials encompassing lecture slides, assignments, and exams. I also offered personalized feedback and guidance to students to ensure their understanding and mastery of concepts. Additionally, I actively engaged with them to provide support and foster comprehension.",
          color: "#0879bf",
        },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        // {
        //   title: "Machine Learning Intern",
        //   company: "TikTok Inc.",
        //   company_url: "https://www.tiktok.com/en/",
        //   logo_path: "tiktok_logo.png",
        //   duration: "May 2022 - Aug 2022",
        //   location: "San Francisco, USA",
        //   description:
        //     "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
        //   color: "#000000",
        // },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Open Source Contributor at PHICSIT's Caffeine & Code",
          company: "PHICSIT",
          company_url: "https://caffeine-and-code.devfolio.co/",
          logo_path: "phicsit.png",
          duration: "Mar 2024 - April 2024",
          location: "Online",
          description:
            "Actively contribute to the development and enhancement of open source projects, particularly focusing on web development tools and frameworks. Whether it's optimizing algorithms, debugging code, or implementing new features, I delivered high-quality contributions that benefit both our team and the wider open source community.",
          color: "#4285F4",
        },
        {
          title: "Social Summer of Code Season 2",
          company: "Social(Formerly Script Foundation)",
          company_url: "https://hack2skill.com/hack/ssoc",
          logo_path: "ssoc.png",
          duration: "June 2023 - July 2023",
          location: "Online",
          description:
            "As an Open Source Contributor at Social Summer of Code Season 2, I enhanced web projects through UI refinements and frontend implementations. Collaborating globally, I embraced teamwork and problem-solving. This experience honed my skills and instilled a passion for impactful open source contributions, shaping my journey in web development.",
          color: "#D83B01",
        },
        {
          title: "Mercer | Mettl Campus Champions",
          company: "Mettl",
          company_url: "https://xathon.mettl.com/",
          logo_path: "mercer.png",
          duration: "Dec 2023 - PRESENT",
          location: "Remote",
          description:
            "My responsibility for this program was to create coding environment within my college. I actively engaged students, fostering enthusiasm and participation in prestigious events of Mercer Mettl coding contest and hackathons such as CodeSmash, Limitless Hackathon, etc",
          color: "#000000",
        },
        {
          title: "Competitive Programming Team",
          company: "MLSA MIET",
          company_url: "https://www.linkedin.com/company/mlsa-miet/",
          logo_path: "mlsa.png",
          duration: "Oct 2023 - PRESENT",
          location: "Remote",
          description:
            "Volunteer with MLSA MIET's Competitive Programming Team, aiding in organizing coding contests. Responsibilities include assisting in event planning, logistics coordination, and ensuring smooth contest execution. Passionate about fostering a competitive programming environment and enhancing participants' skills through engaging challenges.",
          color: "#0C9D58",
        },
        {
          title: "PHICSIT Chapter Leads",
          company: "PHICSIT",
          company_url: "https://github.com/",
          logo_path: "phicsit.png",
          duration: "Feb 2024 - PRESENT",
          location: "Remote",
          description:
            "My responsibility includes promoting PHICSIT tests, coding contests, and hackathons. Other responsibilities include generating ideas for improving the PHICSIT website, organizing events, and encouraging college students to participate in contests and hackathons. Passionate about fostering a vibrant tech community and enhancing participants' skills.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "Feel free to reach out to me. Whether it's a question, a project you need guidance on web development, open source projects, competitive programming, data structure and algorithms, or just a friendly chat about tech, I'm all ears! Looking forward to hearing from you soon.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I write tech blogs aiming to empower readers with impactful lessons, fostering fundamental changes in their understanding, ultimately enhancing their individual growth.",
    link: "https://codeforces.com/blog/jinx_vi",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Sector-V, Salt Lake, Kolkata, West Bengal - 700091",
    locality: "Salt Lake",
    country: "IN",
    region: "Kolkata",
    postalCode: "700091",
    streetAddress: "Sector-V",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/DgB6XSCMjufia7v1A",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
