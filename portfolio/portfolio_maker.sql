

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";




--
-- Database: `portfolio_maker`
--

-- --------------------------------------------------------

--
-- Table structure for table `pm_contact`
--

CREATE TABLE `pm_contact` (
  `cont_id` int(11) NOT NULL,
  `name` tinytext NOT NULL,
  `email` tinytext NOT NULL,
  `subject` tinytext NOT NULL,
  `message` tinytext NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pm_projects`
--

CREATE TABLE `pm_projects` (
  `project_id` int(11) NOT NULL,
  `project_image` varchar(200) NOT NULL,
  `project_title` tinytext NOT NULL,
  `project_description` varchar(300) NOT NULL,
  `project_technology` varchar(500) NOT NULL,
  `project_date` datetime NOT NULL,
  `project_url` tinytext NOT NULL,
  `project_status` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pm_services`
--

CREATE TABLE `pm_services` (
  `service_id` int(11) NOT NULL,
  `service_icon` varchar(200) NOT NULL,
  `service_title` tinytext NOT NULL,
  `service_description` tinytext NOT NULL,
  `service_experience` int(11) NOT NULL,
  `service_status` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pm_skills`
--

CREATE TABLE `pm_skills` (
  `skill_id` int(11) NOT NULL,
  `skill_name` tinytext NOT NULL,
  `skill_icon` varchar(200) NOT NULL,
  `skill_level` int(11) NOT NULL,
  `skill_tagline` tinytext NOT NULL,
  `skill_category` tinytext NOT NULL,
  `skill_status` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pm_social_media`
--

CREATE TABLE `pm_social_media` (
  `social_media_id` int(11) NOT NULL,
  `social_media_icon` varchar(200) NOT NULL,
  `social_media_name` tinytext NOT NULL,
  `social_media_link` varchar(500) NOT NULL,
  `social_media_status` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pm_template`
--

CREATE TABLE `pm_template` (
  `temp_id` int(11) NOT NULL,
  `temp_name` tinytext NOT NULL,
  `temp_desc` text NOT NULL,
  `temp_url` tinytext NOT NULL,
  `upload_date` datetime NOT NULL,
  `temp_status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pm_user`
--

CREATE TABLE `pm_user` (
  `user_id` int(11) NOT NULL,
  `firstname` tinytext NOT NULL,
  `lastname` tinytext NOT NULL,
  `email` tinytext NOT NULL,
  `password` tinytext NOT NULL,
  `mobile_no` bigint(20) NOT NULL,
  `subdomain_name` tinytext NOT NULL,
  `date_of_birth` date NOT NULL,
  `address` varchar(200) NOT NULL,
  `zip_code` mediumint(9) NOT NULL,
  `about_description` tinytext NOT NULL,
  `user_image` varchar(200) NOT NULL,
  `user_background_image` varchar(200) NOT NULL,
  `quote` tinytext NOT NULL,
  `hero_sec_description` tinytext NOT NULL,
  `specialization` varchar(400) NOT NULL,
  `completed_projects` int(11) NOT NULL,
  `clients` int(11) NOT NULL,
  `application` int(11) NOT NULL,
  `expereince` int(11) NOT NULL,
  `hobby` varchar(200) NOT NULL,
  `registration_date_time` datetime NOT NULL,
  `renew_date` date NOT NULL,
  `duration_time` time NOT NULL,
  `resume` varchar(200) NOT NULL,
  `selected_template` int(11) NOT NULL,
  `user_status` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pm_contact`
--
ALTER TABLE `pm_contact`
  ADD PRIMARY KEY (`cont_id`);

--
-- Indexes for table `pm_projects`
--
ALTER TABLE `pm_projects`
  ADD PRIMARY KEY (`project_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `pm_services`
--
ALTER TABLE `pm_services`
  ADD PRIMARY KEY (`service_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `pm_skills`
--
ALTER TABLE `pm_skills`
  ADD PRIMARY KEY (`skill_id`),
  ADD KEY `skill_user_id` (`user_id`);

--
-- Indexes for table `pm_social_media`
--
ALTER TABLE `pm_social_media`
  ADD PRIMARY KEY (`social_media_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `pm_template`
--
ALTER TABLE `pm_template`
  ADD PRIMARY KEY (`temp_id`);

--
-- Indexes for table `pm_user`
--
ALTER TABLE `pm_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pm_contact`
--
ALTER TABLE `pm_contact`
  MODIFY `cont_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pm_projects`
--
ALTER TABLE `pm_projects`
  MODIFY `project_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pm_services`
--
ALTER TABLE `pm_services`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pm_skills`
--
ALTER TABLE `pm_skills`
  MODIFY `skill_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pm_social_media`
--
ALTER TABLE `pm_social_media`
  MODIFY `social_media_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pm_template`
--
ALTER TABLE `pm_template`
  MODIFY `temp_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pm_user`
--
ALTER TABLE `pm_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pm_projects`
--
ALTER TABLE `pm_projects`
  ADD CONSTRAINT `project_user_id` FOREIGN KEY (`user_id`) REFERENCES `pm_user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `pm_services`
--
ALTER TABLE `pm_services`
  ADD CONSTRAINT `service_user_id` FOREIGN KEY (`user_id`) REFERENCES `pm_services` (`service_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `pm_skills`
--
ALTER TABLE `pm_skills`
  ADD CONSTRAINT `skill_user_id` FOREIGN KEY (`user_id`) REFERENCES `pm_user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `pm_social_media`
--
ALTER TABLE `pm_social_media`
  ADD CONSTRAINT `social_media_user_id` FOREIGN KEY (`user_id`) REFERENCES `pm_user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
