-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2024 at 09:32 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `introduction` text DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `age`, `introduction`, `photo`) VALUES
(1, 22, 'I am a passionate software engineer with a love for creating innovative solutions and a keen interest in continuous learning. With a background in both front-end and back-end development, I enjoy tackling complex problems and collaborating with diverse teams to build user-friendly applications.', '/assets/img/avatar.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `achievements`
--

CREATE TABLE `achievements` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `year` varchar(10) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `achievements`
--

INSERT INTO `achievements` (`id`, `title`, `description`, `year`, `image`) VALUES
(1, 'Best Developer Award', 'Awarded Best Developer at Tech Solutions Ltd for outstanding performance and contributions to the team.', '2022', 'https://your-image-link.com/achievement-image.jpg'),
(2, 'Hackathon Winner', 'Won the annual national hackathon with an innovative solution for real-time data processing.', '2021', 'https://your-image-link.com/achievement-image.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `certifications`
--

CREATE TABLE `certifications` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `institution` varchar(100) DEFAULT NULL,
  `year` varchar(10) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `certifications`
--

INSERT INTO `certifications` (`id`, `name`, `institution`, `year`, `image`) VALUES
(1, 'Certified JavaScript Developer', 'Tech Institute', '2021', 'https://your-image-link.com/certification-image.jpg'),
(2, 'AWS Certified Solutions Architect', 'Amazon Web Services', '2023', 'https://your-image-link.com/certification-image.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `email`, `facebook`, `phone`, `linkedin`, `github`) VALUES
(1, 'trungnt261@gmail.com', 'http://facebook.com/trungnt261', '+84 981568196', 'https://www.linkedin.com/in/yourprofile', 'https://github.com/Trung274/');

-- --------------------------------------------------------

--
-- Table structure for table `education`
--

CREATE TABLE `education` (
  `id` int(11) NOT NULL,
  `degree` varchar(100) DEFAULT NULL,
  `institution` varchar(100) DEFAULT NULL,
  `year` varchar(20) DEFAULT NULL,
  `details` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `education`
--

INSERT INTO `education` (`id`, `degree`, `institution`, `year`, `details`) VALUES
(1, 'Bachelor of Science in Computer Science', 'University of Science and Technology Hanoi', '2020 - 2024', 'Focused on software development, algorithms, and data structures.'),
(2, 'Master of Science in Software Engineering', 'National University', '2020 - 2022', 'Specialized in advanced software engineering principles, project management, and machine learning.');

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `id` int(11) NOT NULL,
  `role` varchar(100) DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL,
  `year` varchar(20) DEFAULT NULL,
  `details` text DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`id`, `role`, `company`, `year`, `details`, `logo`) VALUES
(1, 'Internship Software Developer', 'Bac Ha Software', '2023 - Present', 'Intern in a team of developers in building scalable web applications, optimizing performance, and ensuring high code quality.', '/assets/img/bhsoft.jpg'),
(2, 'Software Developer', 'XXXtech', '2019 - 2022', 'Developed and maintained various web applications, collaborated with cross-functional teams, and participated in code reviews.', '/assets/img/tech.webp');

-- --------------------------------------------------------

--
-- Table structure for table `favorite_colors`
--

CREATE TABLE `favorite_colors` (
  `id` int(11) NOT NULL,
  `personal_info_id` int(11) DEFAULT NULL,
  `color` varchar(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favorite_colors`
--

INSERT INTO `favorite_colors` (`id`, `personal_info_id`, `color`) VALUES
(1, 1, '#3498db'),
(2, 1, '#2ecc71'),
(3, 1, '#e74c3c');

-- --------------------------------------------------------

--
-- Table structure for table `hobbies`
--

CREATE TABLE `hobbies` (
  `id` int(11) NOT NULL,
  `personal_info_id` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `icon` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hobbies`
--

INSERT INTO `hobbies` (`id`, `personal_info_id`, `name`, `icon`) VALUES
(1, 1, 'Photography', '📷'),
(2, 1, 'Hiking', '🥾'),
(3, 1, 'Chess', '♟️'),
(4, 1, 'Cooking', '🍳');

-- --------------------------------------------------------

--
-- Table structure for table `interests`
--

CREATE TABLE `interests` (
  `id` int(11) NOT NULL,
  `about_id` int(11) DEFAULT NULL,
  `interest` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `interests`
--

INSERT INTO `interests` (`id`, `about_id`, `interest`) VALUES
(1, 1, 'Movie Lover'),
(2, 1, 'Software Engineering'),
(3, 1, 'Traveling'),
(4, 1, 'Video Games');

-- --------------------------------------------------------

--
-- Table structure for table `personality_traits`
--

CREATE TABLE `personality_traits` (
  `id` int(11) NOT NULL,
  `personal_info_id` int(11) DEFAULT NULL,
  `trait` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `personality_traits`
--

INSERT INTO `personality_traits` (`id`, `personal_info_id`, `trait`) VALUES
(1, 1, 'Innovative'),
(2, 1, 'Strategic'),
(3, 1, 'Analytical'),
(4, 1, 'Independent');

-- --------------------------------------------------------

--
-- Table structure for table `personal_info`
--

CREATE TABLE `personal_info` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `tagline` text DEFAULT NULL,
  `favorite_quote` text DEFAULT NULL,
  `personality_type` varchar(10) DEFAULT NULL,
  `fun_fact` text DEFAULT NULL,
  `currently_learning` varchar(100) DEFAULT NULL,
  `life_goal` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `personal_info`
--

INSERT INTO `personal_info` (`id`, `name`, `tagline`, `favorite_quote`, `personality_type`, `fun_fact`, `currently_learning`, `life_goal`) VALUES
(1, 'Nguyen Thanh Trung', 'Crafting Digital Experiences with Code and Creativity', 'The only way to do great work is to love what you do. - Steve Jobs', 'INTJ', 'I once coded for 48 hours straight to win a hackathon!', 'Machine Learning and AI', 'To create technology that positively impacts millions of lives');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `contribution` text DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `description`, `short_description`, `contribution`, `thumbnail`, `github`) VALUES
(1, 'Social Media Music App', 'Built a social media application with real-time chat, post sharing, and user profile management.', 'A social media app for music lovers.', 'I was responsible for designing and implementing UI for the web page, handling posted photo and profile management.', '/assets/img/music.png', 'https://github.com/ntbtrung/music_sharing_web_app'),
(2, 'Job Applicant Platform', 'Developed a full-featured job applicant platform with user authentication, job management, and application tracking.', 'A platform connecting job seekers and employers.', 'I was responsible for everything since this is for my thesis defense.', '/assets/img/job1.png', 'https://github.com/Trung274/demo-backend-final-prj');

-- --------------------------------------------------------

--
-- Table structure for table `project_images`
--

CREATE TABLE `project_images` (
  `id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project_images`
--

INSERT INTO `project_images` (`id`, `project_id`, `image_url`) VALUES
(1, 1, '/assets/img/music1.png'),
(2, 1, '/assets/img/music2.png'),
(3, 1, '/assets/img/music3.png'),
(4, 2, '/assets/img/job1.png'),
(5, 2, '/assets/img/job2.png'),
(6, 2, '/assets/img/job3.png'),
(7, 2, '/assets/img/job4.png'),
(8, 2, '/assets/img/job5.png'),
(9, 2, '/assets/img/job6.png');

-- --------------------------------------------------------

--
-- Table structure for table `project_technologies`
--

CREATE TABLE `project_technologies` (
  `id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `technology` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project_technologies`
--

INSERT INTO `project_technologies` (`id`, `project_id`, `technology`) VALUES
(1, 1, 'HTML'),
(2, 1, 'MySQL'),
(3, 1, 'Node.js'),
(4, 2, 'React'),
(5, 2, 'Express.js'),
(6, 2, 'Node.js'),
(7, 2, 'MongoDB');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `name`, `description`) VALUES
(1, 'JavaScript', 'Proficient in JavaScript, with experience in building dynamic web applications using modern frameworks and libraries.'),
(2, 'TypeScript', 'Skilled in TypeScript for developing large-scale applications with robust type-checking and better code quality.'),
(3, 'Angular', 'Experienced in building scalable single-page applications using Angular and its powerful features.'),
(4, 'React', 'Knowledgeable in React for creating interactive user interfaces and managing component-based architecture.'),
(5, 'Node.js', 'Proficient in server-side development with Node.js, building RESTful APIs and handling asynchronous operations.'),
(6, 'Express', 'Experienced in using Express.js for building efficient and scalable server-side applications.'),
(7, 'MongoDB', 'Skilled in MongoDB for designing flexible and scalable NoSQL databases for various applications.'),
(8, 'SQL', 'Proficient in SQL for managing relational databases, writing complex queries, and optimizing database performance.'),
(9, 'HTML', 'Experienced in writing semantic HTML for structuring web content effectively.'),
(10, 'CSS', 'Skilled in CSS for styling web pages, including modern layout techniques like Flexbox and Grid.'),
(11, 'Git', 'Proficient in using Git for version control, collaborating with teams, and managing code repositories.'),
(12, 'Agile Methodologies', 'Knowledgeable in Agile methodologies for efficient project management and iterative development.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `achievements`
--
ALTER TABLE `achievements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `certifications`
--
ALTER TABLE `certifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `education`
--
ALTER TABLE `education`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favorite_colors`
--
ALTER TABLE `favorite_colors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `personal_info_id` (`personal_info_id`);

--
-- Indexes for table `hobbies`
--
ALTER TABLE `hobbies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `personal_info_id` (`personal_info_id`);

--
-- Indexes for table `interests`
--
ALTER TABLE `interests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `about_id` (`about_id`);

--
-- Indexes for table `personality_traits`
--
ALTER TABLE `personality_traits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `personal_info_id` (`personal_info_id`);

--
-- Indexes for table `personal_info`
--
ALTER TABLE `personal_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_images`
--
ALTER TABLE `project_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_id` (`project_id`);

--
-- Indexes for table `project_technologies`
--
ALTER TABLE `project_technologies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_id` (`project_id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `achievements`
--
ALTER TABLE `achievements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `certifications`
--
ALTER TABLE `certifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `education`
--
ALTER TABLE `education`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `favorite_colors`
--
ALTER TABLE `favorite_colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `hobbies`
--
ALTER TABLE `hobbies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `interests`
--
ALTER TABLE `interests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personality_traits`
--
ALTER TABLE `personality_traits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_info`
--
ALTER TABLE `personal_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `project_images`
--
ALTER TABLE `project_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `project_technologies`
--
ALTER TABLE `project_technologies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `favorite_colors`
--
ALTER TABLE `favorite_colors`
  ADD CONSTRAINT `favorite_colors_ibfk_1` FOREIGN KEY (`personal_info_id`) REFERENCES `personal_info` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `hobbies`
--
ALTER TABLE `hobbies`
  ADD CONSTRAINT `hobbies_ibfk_1` FOREIGN KEY (`personal_info_id`) REFERENCES `personal_info` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `interests`
--
ALTER TABLE `interests`
  ADD CONSTRAINT `interests_ibfk_1` FOREIGN KEY (`about_id`) REFERENCES `about` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `personality_traits`
--
ALTER TABLE `personality_traits`
  ADD CONSTRAINT `personality_traits_ibfk_1` FOREIGN KEY (`personal_info_id`) REFERENCES `personal_info` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `project_images`
--
ALTER TABLE `project_images`
  ADD CONSTRAINT `project_images_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `project_technologies`
--
ALTER TABLE `project_technologies`
  ADD CONSTRAINT `project_technologies_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
