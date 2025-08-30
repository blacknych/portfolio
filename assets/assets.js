import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import vsu_logo from './vsu_logo.png';
import wlc_logo from './wlc_logo.png';


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
    ,vsu_logo,
    wlc_logo
};

export const workData = [
  {
    title: 'MATEMATIKA - Mobile',
    description: 'Matematika is a space-themed mobile game that helps Grade 1 students learn math through fun, interactive levels.',
    images: ['/mobile.png', '/mobile2.png'],
    tags: ['UI/UX Design', 'Mobile App', 'Game Design', 'Math Game', 'Godot Engine'],
    links: [
      { label: 'View on Figma', url: 'https://www.figma.com/design/ETKG3ZSsXFeu7iT9xb2OXL/MATEMATIKA?node-id=0-1&t=HwJP2OIQ9vAxbkEu-1', color: 'bg-pink-500 hover:bg-pink-600' },
      { label: 'View Code', url: 'https://github.com/blacknych/matematika-mobile', color: 'bg-purple-500 hover:bg-purple-600' }
    ]
  },
  {
    title: 'MATEMATIKA - Web',
    description: 'The Matematika web portal empowers teachers with tools to manage classes, create assessments, and track student progress.',
    images: ['/web.png', '/web2.png', '/web3.png'],
   tags: ['UI/UX Design', 'Web App', 'React', 'Next.js', 'Firebase', 'Educational Platform']  ,
    links: [
      { label: 'View Code', url: 'https://github.com/blacknych/matematika-web', color: 'bg-purple-500 hover:bg-purple-600' }
    ]
  }
];


export const serviceData = [
    { icon: assets.vsu_logo, title: 'Bachelor of Science in Computer in Computer Science', description: 'Visayas State University',description2: '2020 - 2025'},
    { icon: assets.wlc_logo, title: 'Senior High School TVL-ICT', description: 'Western Leyte College Inc.',description2: '2018 - 2020'},
]

export const workExpData = [
  {
    icon: assets.project_icon,iconDark: assets.project_icon_dark, 
    company: 'Alliance Software Incorporated',
    location: 'Cebu City, Cebu',
    role: 'On-the-Job Trainee',
    duration: 'Jun 2024 – Aug 2024',
    bullets: [
      'Completed On-the-Job Training at Alliance Software Inc. through the Summer Bridging Training Program',
      'Served as Lead Front-end Developer, UI/UX Designer, and QA, taking initiative in design, development, and testing tasks',
      'Designed wireframes and mock-ups using Figma to plan and visualize user interfaces',
      'Developed user interfaces using ASP.NET and MySQL, focusing on layout consistency and user experience',
      'Conducted software testing and QA to ensure functionality, usability, and cross-browser compatibility',
      'Assisted in project management tasks including tracking progress, coordinating with team members, and preparing reports using ClickUp and Discord',
      'Utilized GitHub for version control and collaborative development'
    ]
  }
]

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];

export const techStackData = [
  {
    icon: assets.project_icon,
    title: "Frontend",
    description: "Technologies I use to build responsive web apps:",
    items: ["HTML", "CSS / Tailwind", "JavaScript", "Vue.js", "Next.js", "React"],
  },
  {
    icon: assets.project_icon,
    title: "Backend",
    description: "Frameworks and tools for server-side apps:",
    items: ["C#", "ASP.NET", "MySQL", "Firebase", "Node.js (basic)"],
  },
  {
    icon: assets.project_icon,
    title: "UI/UX & Design",
    description: "Tools I use to design clean and modern interfaces:",
    items: ["Figma", "Adobe Illustrator", "Canva"],
  },
];