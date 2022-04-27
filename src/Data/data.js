const HEADER = "Svelcro";

const NAVBAR_DATA = [
  // { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#services", label: "Features" },
  { id: 3, url: "#about-us", label: "Details" },
  { id: 4, url: "#testimonials", label: "Our Team" },
  { id: 5, url: "#footer", label: "Contact Us" }
];
const BANNER_DATA = {
  HEADING: "Svelte performance monitoring with Svelcro",
  DECRIPTION:
    "Svelcro can help you view application architecture, component state, and performance information such as render count and time",
  TUTORIAL_URL:
    "https://github.com/oslabs-beta/Svelcro",
  DOWNLOAD: "Download"
};
const SERVICE_DATA = {
  HEADING: "Features",
  SERVICE_LIST: [
    {
      LABEL: "Component Dependencies",
      DESCRIPTION:
        "Visualize your Svelte components in a component tree or hierarchy",
      URL: ""
    },
    {
      LABEL: "Visualize State",
      DESCRIPTION:
        "Display component specific state and properties",
      URL: ""
    },
    {
      LABEL: "Component Render Tracking",
      DESCRIPTION:
        "Monitor component rendering performance through time and count graphs",
      URL: ""
    }
  ]
};

const ABOUT_DATA = {
  DATA: [{
  TITLE: "Visualize your component structure",
  DETAILS: "This can be visualized as a component dependency tree or hierarchy",
  IMAGE_URL: "images/component-tree-hierarchy.gif",
  ID: "tree"
  //fix image URL 
},
{
  TITLE: "View state and component properties",
  DETAILS: "State and component specific properties with automatically populate after user inputs or actions",
  IMAGE_URL: "images/state-change.gif",
  ID: "state"
  //fix image URL 
},
{
  TITLE: "Monitor component render times",
  DETAILS: "The profiler tracks how many milliseconds it takes for each component to render",
  IMAGE_URL: "images/render-times.gif",
  ID: "time"
  //fix image URL 
},
{
  TITLE: "Track component re-renders",
  DETAILS: "The profiler also keeps track of how many times each component has rendered",
  IMAGE_URL: "images/render-count.gif",
  ID: "count"
  //fix image URL 
}
]};



const TESTIMONIAL_DATA = {
  HEADING: "Our Team",
  TESTIMONIAL_LIST: [
    {
    //   DESCRIPTION:
    //     "Nixalar has made a huge difference to our business with his good work and knowledge of SEO and business to business marketing techniques. Our search engine rankings are better than ever and we are getting more people contacting us thanks to Jomer’s knowledge and hard work.",
      IMAGE_URL: "images/ming.jpg",
      NAME: "Yanming Yu",
      DESIGNATION: "Software Engineer",
      GITHUB: "https://github.com/jimmyjameswong",
      LINKEDIN: "https://www.linkedin.com/in/yanmingyu/"
    },
    {
    //   DESCRIPTION:
    //     "Nixalar and his team have provided us with a comprehensive, fast and well planned digital marketing strategy that has yielded great results in terms of content, SEO, Social Media. His team are a pleasure to work with, as well as being fast to respond and adapt to the needs of your brand.",
      IMAGE_URL: "images/rankin6.jpg",
      NAME: "Rankin Draa",
      DESIGNATION: "Software Engineer",
      GITHUB: "https://github.com/rankind94",
      LINKEDIN: "https://www.linkedin.com/in/rankin-draa/"
      
    },
    {
        // DESCRIPTION:
        //   "Nixalar and his team have provided us with a comprehensive, fast and well planned digital marketing strategy that has yielded great results in terms of content, SEO, Social Media. His team are a pleasure to work with, as well as being fast to respond and adapt to the needs of your brand.",
        IMAGE_URL: "images/sara.png",
        NAME: "Sara Kivikas",
        DESIGNATION: "Software Engineer",
        GITHUB: "https://www.github.com/skivikas",
        LINKEDIN: "https://www.linkedin.com/in/sara-kivikas/",

      },
      {
        // DESCRIPTION:
        //   "Nixalar and his team have provided us with a comprehensive, fast and well planned digital marketing strategy that has yielded great results in terms of content, SEO, Social Media. His team are a pleasure to work with, as well as being fast to respond and adapt to the needs of your brand.",
        IMAGE_URL: "images/zack5.jpg",
        NAME: "Zack Daniels",
        DESIGNATION: "Software Engineer",
        GITHUB: "https://github.com/zackdaniels",
        LINKEDIN:"https://www.linkedin.com/in/zackdanielsnyc/"
      }
  ]
};

const SOCIAL_DATA = {
  HEADING: "Find us on social media",
  IMAGES_LIST: [ {
      ICON: "images/linkedin-icon.png",
      URL: "https://www.linkedin.com/company/85416527/admin/"
  },
   {
      ICON:"images/twitter-icon.png",
      URL: "https://twitter.com/SvelcroDT"
   },
   {
       ICON: "images/facebook-icon.png",
       URL: "https://www.facebook.com/Svelcro"

   }
]
};

const FOOTER_DATA = {
  DESCRIPTION:
    "Svelcro is Open Source. Help make our tool even better:",
  CONTACT_DETAILS: {
    HEADING: "Contact us",
    EMAIL: "svelcrodt@gmail.com"
  },
  SUBSCRIBE_NEWSLETTER: "Subscribe newsletter",
  SUBSCRIBE: "Subscribe"
};

const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  SERVICE_DATA,
  ABOUT_DATA,
  TESTIMONIAL_DATA,
  SOCIAL_DATA,
  FOOTER_DATA
};
export default MOCK_DATA