-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Feb 03, 2021 at 04:47 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chubb_imdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `artist`
--

DROP TABLE IF EXISTS `artist`;
CREATE TABLE IF NOT EXISTS `artist` (
  `ARTIST_ID` varchar(5) DEFAULT NULL,
  `ARTIST_NAME` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `artist`
--

INSERT INTO `artist` (`ARTIST_ID`, `ARTIST_NAME`) VALUES
('101', 'RAJNIKANTH'),
('102', 'ARJUN'),
('103', 'ROBERT DOWNREY JR'),
('104', 'SYLVESTER STALLONE');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
CREATE TABLE IF NOT EXISTS `genres` (
  `GENRE_ID` int(5) DEFAULT NULL,
  `GENRE_NAME` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`GENRE_ID`, `GENRE_NAME`) VALUES
(101, 'DRAMA'),
(102, 'ACTION'),
(103, 'FICTION'),
(104, 'COMEDY');

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
CREATE TABLE IF NOT EXISTS `media` (
  `MOVIE_ID` varchar(255) DEFAULT NULL,
  `MEDIA` varchar(255) DEFAULT NULL,
  `TYPE` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`MOVIE_ID`, `MEDIA`, `TYPE`) VALUES
('101', '101.png', 'IMAGE'),
('102', '102.png', 'IMAGE'),
('103', '103.png', 'IMAGE'),
('104', '104.mp4', 'VIDEO');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
CREATE TABLE IF NOT EXISTS `movies` (
  `MOVIE_ID` int(3) DEFAULT NULL,
  `TITLE` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`MOVIE_ID`, `TITLE`) VALUES
(101, 'ROBOT'),
(102, 'SHIVAJI'),
(103, 'AVENGERS'),
(104, 'JAILBREAK');

-- --------------------------------------------------------

--
-- Table structure for table `movie_genre`
--

DROP TABLE IF EXISTS `movie_genre`;
CREATE TABLE IF NOT EXISTS `movie_genre` (
  `Movie_ID` varchar(5) DEFAULT NULL,
  `Genre_ID` varchar(5) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movie_genre`
--

INSERT INTO `movie_genre` (`Movie_ID`, `Genre_ID`) VALUES
('101', '102'),
('102', '103'),
('103', '103'),
('103', '101');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
CREATE TABLE IF NOT EXISTS `reviews` (
  `movie_id` varchar(5) DEFAULT NULL,
  `user_id` varchar(5) DEFAULT NULL,
  `rating` varchar(1) DEFAULT NULL,
  `review` varchar(255) DEFAULT NULL,
  `rev_date` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`movie_id`, `user_id`, `rating`, `review`, `rev_date`) VALUES
('101', '101', '1', 'GOOD', '2021-01-01'),
('102', '101', '2', 'BETTER', '2021-02-02'),
('103', '101', '3', 'AVERAGAE', '2021-03-03'),
('102', '101', '1', 'BEST', '2021-04-04');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `ARTIST_ID` varchar(5) DEFAULT NULL,
  `ROLE_ID` varchar(5) DEFAULT NULL,
  `MOVIE_ID` varchar(5) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`ARTIST_ID`, `ROLE_ID`, `MOVIE_ID`) VALUES
('101', '101', '101'),
('102', '102', '102'),
('103', '103', '103'),
('104', '104', '104');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
CREATE TABLE IF NOT EXISTS `skills` (
  `ARTIST_ID` varchar(5) DEFAULT NULL,
  `ARTIST_SKILLS` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`ARTIST_ID`, `ARTIST_SKILLS`) VALUES
('101', 'ACTOR'),
('102', 'DIRECTOR'),
('103', 'PRODUCER'),
('104', 'WRITER');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `USER_ID` varchar(5) DEFAULT NULL,
  `USERNAME` varchar(255) DEFAULT NULL,
  `MOVIE_ID` varchar(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`USER_ID`, `USERNAME`, `MOVIE_ID`) VALUES
('101', 'Pushkar', '102'),
('102', 'Ravi', '103'),
('103', 'Pranav', '104'),
('104', 'Varun', '101');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
