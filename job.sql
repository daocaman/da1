-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2020 at 07:48 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.5.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `job`
--

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `job_title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `job_des` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` int(11) NOT NULL,
  `salary` int(11) NOT NULL,
  `location` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` int(11) NOT NULL,
  `expire_date` date NOT NULL,
  `company_name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_des` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `web_site` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job`
--

INSERT INTO `job` (`id`, `id_user`, `job_title`, `job_des`, `type`, `salary`, `location`, `category`, `expire_date`, `company_name`, `company_des`, `web_site`, `email`) VALUES
(1, 5, 'DEV FRONTEND', 'Công việc nhẹ lương cao', 0, 1000, '120/44 Xóm Đất P8 Q11', 0, '2020-09-01', 'AMIT GROUP', 'Công ty cổ phần Amit Group', 'https://www.google.com.vn/', 'daocaman@gmail.com'),
(3, 6, 'ASP.NET MVC', '123', 1, 2000, 'Hồ CHí Minh', 2, '2020-09-05', 'Amit Group', 'Amit Group', 'https://www.amitgroup.vn/', 'daocaman1998@gmail.com'),
(4, 6, 'Angular', 'Angular', 1, 2000, 'Hồ CHí Minh', 2, '2020-09-05', 'Amit Group', 'Amit Group', 'https://www.amitgroup.vn/', 'daocaman1998@gmail.com'),
(5, 6, 'Angular', 'Angular', 1, 2000, 'Hồ CHí Minh', 2, '2020-10-20', 'Amit Group', 'Amit Group', 'https://www.amitgroup.vn/', 'daocaman1998@gmail.com'),
(8, 6, 'ASP.NET MVC', '123', 1, 123, 'Hồ CHí Minh', 1, '2020-09-04', 'daocaman', '123', 'https://www.amitgroup.vn/', 'daocaman1998@gmail.com'),
(9, 6, 'ASP.NET MVC', '123', 1, 123, 'Hồ CHí Minh', 1, '2020-09-04', 'daocaman', '123', 'https://www.amitgroup.vn/', 'daocaman1998@gmail.com'),
(10, 6, 'ASP.NET MVC', '123', 0, 2000, 'Hồ CHí Minh', 2, '2020-09-04', 'Amit Group', 'Amit Group', 'https://www.amitgroup.vn/', 'daocaman1998@gmail.com'),
(11, 6, 'ASP.NET MVC', 'ASP.NET MVC', 1, 100, 'Hồ CHí Minh', 3, '2020-12-21', 'Amit Group', 'Amit Group', 'http://amitgroup.vn', 'daocaman1998@gmail.com'),
(12, 8, 'Design Frontend', 'Design Frontend', 1, 1500, 'Hồ CHí Minh', 1, '2020-08-20', 'Amit Group', 'Amit Group', 'https://www.amitgroup.vn/', 'daocaman@gmail.com'),
(13, 6, 'Angular', 'Angular', 1, 2000, 'Hồ CHí Minh', 2, '2020-02-20', 'Amit Group', 'Amit Group', 'https://www.amitgroup.vn/', 'amitgroup@gmail.com'),
(14, 6, 'Angular', 'Angular', 1, 2000, 'Hồ CHí Minh', 2, '2020-02-20', 'Amit Group', 'Amit Group', 'https://www.amitgroup.vn/', 'amitgroup@gmail.com'),
(15, 6, 'ASP.NET MVC', 'ASP.NET MVC', 1, 200, 'Hồ CHí Minh', 3, '2002-02-20', 'Amit Group', 'Amit Group', 'https://www.amitgroup.vn/', 'amitgroup@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `type`) VALUES
(5, 'dao cam', 'an1', 'daocaman1998@gmail.com', 'ad7832076fad3d762e2d3e693f28eea9', 1),
(6, 'Đào', 'An', 'leoandvirgo1998@gmail.com', 'ad7832076fad3d762e2d3e693f28eea9', 2),
(7, 'Đào', 'An', 'daocaman1998@gmail.co', '81dc9bdb52d04dc20036dbd8313ed055', 2),
(8, 'Đào', 'An', 'daocaman@gmail.com', 'ad7832076fad3d762e2d3e693f28eea9', 2),
(9, 'dao cam', 'an1', 'daocaman1234@gmail.com', 'ad7832076fad3d762e2d3e693f28eea9', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `job`
--
ALTER TABLE `job`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
