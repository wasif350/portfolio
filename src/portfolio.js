/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Wasif Saeed",
  title: "Hi all, Wasif Saeed",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 having an experience of building Web and AI applications with Python / Django / FastAPI / LLM / API Integration / Typo3 / Symfony and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1KtCu3ubdA6BEC0RwsTKusp6dDlT66lrU/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/wasif350",
  linkedin: "https://www.linkedin.com/in/wasif-saeed-970-code/",
  gmail: "wasifsaeed970@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate Software Engineer eager to explore and master diverse tech stacks.",
  skills: [
    emoji(
      "⚡ Develop highly interactive APIs for your web and AI applications"
    ),
    emoji("⚡ Progressive Web Applications"),
    emoji(
      "⚡ Integration of third party services such as Google / Bing / Paypal / ChatGPT Gemini"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    // {
    //   skillName: "AI",
    //   fontAwesomeClassname: "fab fa-microchip"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sargodha University",
      logo: require("./assets/images/su.png"),
      subHeader: "Bachelor in Science in Computer Science",
      duration: "September 2019 - April 2023",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Problem Solving", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    
    {
      role: "Software Engineer",
      company: "Axioim World ",
      companylogo: require("./assets/images/axiom.png"),
      date: "Nov 2024 – Present",
      desc: "Creating custom modules in the ERP platform Odoo, upgrading modules from lower to higher versions, and implementing AI features in projects"
    },
    {
      role: "Software Engineer",
      company: "Gosign GmbH",
      companylogo: require("./assets/images/gosign.png"),
      date: "Jan 2023 – Nov 2024",
      desc: "LMy responsibilities encompass not only rectifying issues but also successfully creating and implementing new website modules. Furthermore, my role extends to conceptualizing and developing the architecture or blueprint of new products and then bringing those ideas to life within TYPO3.",
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/gdpr.png"),
      projectName: "GDPR Extensions",
      projectDesc: "Exentions with gdpr consent and a gdpr crawler to detect issues in websites and generate extensive report of website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dashboard.gdpr-extensions.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/kurationc.png"),
      projectName: "Kuration AI",
      projectDesc: "Curate a lrage list resouces of different types depend upon the scenerio with the help of Ai",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.kurationai.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "UC BERKLEY CALICO",
      subtitle:
        "I've participate in this prestigious competitive coding competition",
      image: require("./assets/images/berkly.jpeg"),
      imageAlt: "UC BERKLEY CALICO Logo",
      footerLink: [
        
      ]
    },
    {
      title: "Google Code Jam",
      subtitle:
        "Take part in this world one of the best coding competition",
      image: require("./assets/images/goj.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        
      ]
    },

    {
      title: "Meta Hacker Cup",
      subtitle: "Take part in this world one of the best coding competition organized by Facebook",
      image: require("./assets/images/meta.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92 304 5598178",
  email_address: "wasifsaeed970@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
