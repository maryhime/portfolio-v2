export const CASE_STUDIES_MOCK_DATA = [
  {
    id: 1,
    project_name:
      "Redesigning a Law Firm’s Website to Build Trust and Professional Credibility",
    subtitle: "",
    // Add Additional information here based on the data you want to add in the inner page
  },
  {
    id: 2,
    project_name:
      "Modernizing Virtual Champ’s Online Presence for Better Client Engagement",
    subtitle:
      "A full redesign of a Virtual Champ’s outdated website to improve user experience, align with brand growth, and attract global clients.",
    project_link: "https://virtualchamps.com/",

    project_overview: [
      "This project involved a complete redesign and rebuild of Virtual Champ Global’s website to improve user experience, modernize the visual design, and better communicate the organization’s global mission.",

      "The goal was to create a user-friendly, responsive, and scalable platform that meets the needs of a diverse international audience.",
    ],

    my_role:
      "  I was responsible for the full UX and UI design, as well as front-end development of the site—from initial research and wireframing to final build and deployment.",

    timeline: "April 2024 - July 2024",
    tools: [
      "Figjam",
      "figma",
      "Wordpress",
      "Elementor pro",
      "react js",
      "tailwind",
      "vite",
    ],

    challenges: [
      " The primary goal of VCG’s website revamp was to transform their outdated online presence into a modern, high-converting platform.",

      "The existing site lacked visual appeal, clear user flows, and the ability to effectively engage and convert visitors. The redesign focused on improving usability, aligning with current design standards, and supporting business growth through a more strategic and user-centered experience.",
    ],

    target_audience:
      " The website targets potential clients and business partners seeking professional BPO services. These include decision-makers looking for outsourcing solutions in customer support, virtual assistance, and back-office operations.",

    existing_site:
      "VCG had an existing website, but due to outdated design and limited functionality, they chose to build a completely new site from scratch to better align with their brand and business goals.",

    discovery_questions: [
      "To align the project with the client’s vision and business  goals, I began by sending a structured questionnaire focused on understanding their challenges with the existing website and their expectations for the new one.",
      "The responses provided clarity on key priorities, such as design preferences, functionality needs, and business objectives. This step helped ensure that the redesign would meet client expectations without compromising on user experience.",
      " As part of the questionnaire, I also asked the client to share  three inspiration websites (design pegs) that reflected their desired look and feel. These references were later used to guide both the ideation and design phases, ensuring a visual direction that felt aligned with the brand.",
    ],

    competitor_analysis:
      "To understand industry trends and user expectations, I conducted a competitive analysis of leading BPO companies, including  Cloudstaff, Accenture, Penbrothers, etc. I compared their website features, how their menu was laid out, service presentation, CTAs, and UX patterns in a comparison table. This analysis helped identify gaps and opportunities that informed the redesign strategy for VCG.",

    competitor_analysis_cont:
      "The table below was mainly for comparing what they show in their navigation menu versus the old VCG website. This helped me understand and get an idea on what to add or remove in the VCG’s main navigation menu.",

    competitor_analysis_image_1: "competitor-analysis-vcg.jpg",
    competitor_analysis_image_2: "competitor-analysis-2-vcg.jpg",

    user_persona_overview:
      "Through the research and discovery phase, I identified two key user groups likely to visit and engage  with the VCG website. Creating these personas helped uncover additional user scenarios and guided the overall direction of the site’s structure and content.",

    user_persona_1: "1. Business Decision Makers",
    user_persona_1_desc:
      "This group includes small business owners, operations managers, and enterprise-level executives. They are responsible for choosing reliable BPO partners to outsource key business functions. Their main goals are to find cost-effective, scalable solutions that improve efficiency and streamline operations.",
    user_persona_1_img: "vcg/personas/user-persona-1-vcg.jpg",

    user_persona_2: "2. Service Seekers & Providers",
    user_persona_2_desc:
      "Comprising freelancers, job seekers, consultants, and digital nomads, this group is either looking for employment opportunities within the BPO industry or outsourcing support for their own businesses. They are driven by the need for work opportunities, project-based roles, or industry resources.",
    user_persona_2_img: "vcg/personas/user-persona-2-vcg.jpg",

    persona_conclusion:
      "Although I focused on just two personas, this process was valuable in clarifying user needs and priorities, and it shaped the website’s content strategy and navigation design.",

    design_direction:
      "The design direction for the new VCG website was shaped by the company’s goal of presenting itself as a professional, trustworthy, and forward-thinking BPO partner. Drawing from user research and competitive analysis, the design aimed to balance clarity, conversion, and credibility.",

    architecture_overview:
      "To ensure a smooth and intuitive user journey, I created a clear site map and navigation structure that reflect user priorities. These tools helped guide decisions about page hierarchy, content grouping, and call-to-action placement.",

    architecture_bullets: [
      "The site map provided a high-level overview of all pages and their relationships.",
      "The navigation chart focused on user flow and how key user groups (e.g., decision-makers vs. service seekers) would interact with the site.",
    ],

    archi_conclusion:
      "Below are the final versions of the site map and navigation flow used during design:",

    site_map: "vcg/architecture/site-map-vcg.jpg",
    navigation_image: "vcg/architecture/navigation-vcg.jpg",

    home_wireframe_desc: [
      "After consolidating insights from the UX research and the client questionnaire, I began designing the initial wireframe for the homepage. This early-stage wireframe focused on content hierarchy, layout structure, and key user flows based on both user needs and business goals",
      "The design was iterative—evolving over time as feedback was gathered and the vision became clearer. I also incorporated elements inspired by the client’s preferred reference websites, ensuring the direction aligned with their expectations for the final look and feel.",
      "Below is an early version of the homepage wireframe, which served as the foundation for the high-fidelity design that followed.",
    ],
    home_wireframe: 'vcg/wireframes/home-wireframe.jpg',
    home_wireframe_caption: 'Early version of the homepage wireframe showing basic layout and content structure. Focus was placed on a strong hero section, clear value proposition, and intuitive navigation paths for key user groups.',

    calc_wireframe_desc: [
      "In addition to the core subpages, the Savings Calculator was one of the most critical features of the website. It was designed to allow potential clients to estimate and compare costs based on the BPO services they were interested in—helping them understand the value of outsourcing with VCG.",
      "This page presented a unique design challenge. While the old site included a calculator, it was non-functional and lacked clarity. Moreover, finding strong reference examples in similar industries was difficult, which meant I had to design a custom solution from scratch.",
      "Working closely with the client, I translated their functional requirements into a user-friendly interface that aligned with the site’s overall design system. The result was a calculator that is both intuitive to use and aligned with business goals, offering clarity to users while maintaining visual consistency.",
    ],
    calc_wireframe: 'vcg/wireframes/calc-wireframe.jpg',
    calc_wireframe_caption: 'The initial wireframe version of the calculator, where the core layout and user flow began to take shape.',
  },
];

export const CASE_STUDIES = Object.freeze([
  {
    id: 1,
    title:
      "Redesigning a Law Firm’s Website to Build Trust and Professional Credibility",
    category: "Website Revamp",
    desc: "A fresh, responsive website design for a local law firm to improve navigation, highlight services, and establish a digital identity.",
    image: "law-firm thumbnail.png",
    link: "#",
  },
  {
    id: 2,
    title:
      "Modernizing Virtual Champ’s Online Presence for Better Client Engagement",
    category: "Website Revamp",
    desc: "A full redesign of a Virtual Champ’s outdated website to improve user experience, align with brand growth, and attract global clients.",
    image: "vcg thumbnail.png",
    link: "#",
  },
]);
