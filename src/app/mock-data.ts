import { HousingLocation } from './housinglocation';

const baseUrl = 'https://angular.dev/assets/images/tutorials/common';

export const MOCK_HOUSING_LOCATIONS: HousingLocation[] = [
    {
        id: 0,
        name: 'Acme Fresh Start Housing',
        city: 'Chicago',
        state: 'IL',
        photo: `${baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
        availableUnits: 4,
        wifi: true,
        laundry: true,
    },
    {
        id: 1,
        name: 'A113 Transitional Housing',
        city: 'Santa Monica',
        state: 'CA',
        photo: `${baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
        availableUnits: 0,
        wifi: false,
        laundry: true,
    },
    {
        id: 2,
        name: 'Warm Beds Housing Support',
        city: 'Juneau',
        state: 'AK',
        photo: `${baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
        availableUnits: 1,
        wifi: false,
        laundry: false,
    },
    {
        id: 3,
        name: 'Homesteady Housing',
        city: 'Chicago',
        state: 'IL',
        photo: `${baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
        availableUnits: 1,
        wifi: true,
        laundry: false,
    },
    {
        id: 4,
        name: 'Happy Homes Group',
        city: 'Gary',
        state: 'IN',
        photo: `${baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
        availableUnits: 1,
        wifi: true,
        laundry: false,
    },
    {
        id: 5,
        name: 'Hopeful Apartment Group',
        city: 'Oakland',
        state: 'CA',
        photo: `${baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
        availableUnits: 2,
        wifi: true,
        laundry: true,
    },
    {
        id: 6,
        name: 'Seriously Safe Towns',
        city: 'Oakland',
        state: 'CA',
        photo: `${baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
        availableUnits: 5,
        wifi: true,
        laundry: true,
    },
    {
        id: 7,
        name: 'Hopeful Housing Solutions',
        city: 'Oakland',
        state: 'CA',
        photo: `${baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
        availableUnits: 2,
        wifi: true,
        laundry: true,
    },
    {
        id: 8,
        name: 'Seriously Safe Towns',
        city: 'Oakland',
        state: 'CA',
        photo: `${baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
        availableUnits: 10,
        wifi: false,
        laundry: false,
    },
    {
        id: 9,
        name: 'Capital Safe Towns',
        city: 'Portland',
        state: 'OR',
        photo: `${baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
        availableUnits: 6,
        wifi: true,
        laundry: true,
    },
];

export const MOCK_ABOUT = {
    age: 22,
    interests: ["Movie Lover", "Software Engineering", "Traveling", "Video Games"],
    introduction: "I am a passionate software engineer with a love for creating innovative solutions and a keen interest in continuous learning. With a background in both front-end and back-end development, I enjoy tackling complex problems and collaborating with diverse teams to build user-friendly applications.",
    photo: "/public/assets/img/avatar.jpg"
};

export const EDUCATION = [
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Science and Technology Hanoi",
        year: "2020 - 2024",
        details: "Focused on software development, algorithms, and data structures."
    },
    {
        degree: "Master of Science in Software Engineering",
        institution: "National University",
        year: "2020 - 2022",
        details: "Specialized in advanced software engineering principles, project management, and machine learning."
    }
];

export const EXPERIENCE = [
    {
        role: "Internship Software Developer",
        company: "Bac Ha Software",
        year: "2023 - Present",
        details: "Leading a team of developers in building scalable web applications, optimizing performance, and ensuring high code quality.",
        logo: "https://your-image-link.com/company-logo.jpg"
    },
    {
        role: "Software Developer",
        company: "XXXtech",
        year: "2019 - 2022",
        details: "Developed and maintained various web applications, collaborated with cross-functional teams, and participated in code reviews.",
        logo: "https://your-image-link.com/company-logo.jpg"
    }
];

export const SKILLS = [
    {
        name: "JavaScript",
        description: "Proficient in JavaScript, with experience in building dynamic web applications using modern frameworks and libraries."
    },
    {
        name: "TypeScript",
        description: "Skilled in TypeScript for developing large-scale applications with robust type-checking and better code quality."
    },
    {
        name: "Angular",
        description: "Experienced in building scalable single-page applications using Angular and its powerful features."
    },
    {
        name: "React",
        description: "Knowledgeable in React for creating interactive user interfaces and managing component-based architecture."
    },
    {
        name: "Node.js",
        description: "Proficient in server-side development with Node.js, building RESTful APIs and handling asynchronous operations."
    },
    {
        name: "Express",
        description: "Experienced in using Express.js for building efficient and scalable server-side applications."
    },
    {
        name: "MongoDB",
        description: "Skilled in MongoDB for designing flexible and scalable NoSQL databases for various applications."
    },
    {
        name: "SQL",
        description: "Proficient in SQL for managing relational databases, writing complex queries, and optimizing database performance."
    },
    {
        name: "HTML",
        description: "Experienced in writing semantic HTML for structuring web content effectively."
    },
    {
        name: "CSS",
        description: "Skilled in CSS for styling web pages, including modern layout techniques like Flexbox and Grid."
    },
    {
        name: "Git",
        description: "Proficient in using Git for version control, collaborating with teams, and managing code repositories."
    },
    {
        name: "Agile Methodologies",
        description: "Knowledgeable in Agile methodologies for efficient project management and iterative development."
    }
];

export const PROJECTS = [
    {
        title: "Social Media Music App",
        description: "Built a social media application with real-time chat, post sharing, and user profile management.",
        technologies: ["Angular", "Firebase", "TypeScript"],
        images: [
            "https://your-image-link.com/project-image1.jpg",
            "https://your-image-link.com/project-image2.jpg"
        ],
        github: "https://github.com/yourprofile/social-media-music-app"
    },
    {
        title: "Job Applicant Platform",
        description: "Developed a full-featured job applicant platform with user authentication, job management, and application tracking.",
        technologies: ["React", "Express.js", "Node.js", "MongoDB"],
        images: [
            "https://your-image-link.com/project-image1.jpg",
            "https://your-image-link.com/project-image2.jpg"
        ],
        github: "https://github.com/yourprofile/job-applicant-platform"
    }
];

export const CERTIFICATIONS = [
    {
        name: "Certified JavaScript Developer",
        institution: "Tech Institute",
        year: "2021",
        image: "https://your-image-link.com/certification-image.jpg"
    },
    {
        name: "AWS Certified Solutions Architect",
        institution: "Amazon Web Services",
        year: "2023",
        image: "https://your-image-link.com/certification-image.jpg"
    }
];

export const ACHIEVEMENTS = [
    {
        title: "Best Developer Award",
        description: "Awarded Best Developer at Tech Solutions Ltd for outstanding performance and contributions to the team.",
        year: "2022",
        image: "https://your-image-link.com/achievement-image.jpg"
    },
    {
        title: "Hackathon Winner",
        description: "Won the annual national hackathon with an innovative solution for real-time data processing.",
        year: "2021",
        image: "https://your-image-link.com/achievement-image.jpg"
    }
];

export const CONTACT = {
    email: "trungnt261@gmail.com",
    facebook:"http://facebook.com/trungnt261",
    phone: "+84 981568196",
    linkedIn: "https://www.linkedin.com/in/yourprofile",
    github: "https://github.com/Trung274/"
};