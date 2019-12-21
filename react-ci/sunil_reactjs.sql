-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 16, 2019 at 04:49 PM
-- Server version: 5.7.26-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sunil_reactjs`
--

-- --------------------------------------------------------

--
-- Table structure for table `add_more_field`
--

CREATE TABLE `add_more_field` (
  `id` int(11) NOT NULL,
  `ttitle` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `status` enum('1','0') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category_name`, `status`) VALUES
(1, 'Men\'s', '1'),
(2, 'Women\'s', '1'),
(3, 'Kid\'s', '1'),
(4, 'Toy\'s', '1');

-- --------------------------------------------------------

--
-- Table structure for table `multiple_image`
--

CREATE TABLE `multiple_image` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `multiple_image`
--

INSERT INTO `multiple_image` (`id`, `image`, `created_at`) VALUES
(1, '2.jpeg', '2019-11-15 07:23:40'),
(2, '1.jpeg', '2019-11-15 07:23:40'),
(3, '3568533535.jpeg', '2019-11-15 07:29:32'),
(4, '6327925224.jpeg', '2019-11-15 07:29:32'),
(5, '11810582435.jpeg', '2019-11-15 07:29:33'),
(6, '19502559534.jpeg', '2019-11-15 07:29:33'),
(7, '102261653_6.jpeg', '2019-11-15 07:32:23'),
(8, '668486446_10.jpeg', '2019-11-15 10:14:34');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `sku` varchar(255) NOT NULL,
  `buyer_price` varchar(100) NOT NULL,
  `seller_price` varchar(100) NOT NULL,
  `discount_type` int(11) NOT NULL,
  `discount` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `category` int(11) NOT NULL,
  `sub_category` int(11) NOT NULL,
  `child_category` int(11) NOT NULL,
  `product_availability` int(11) NOT NULL,
  `stock` varchar(255) NOT NULL,
  `product_image` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('1','0') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `title`, `sku`, `buyer_price`, `seller_price`, `discount_type`, `discount`, `description`, `category`, `sub_category`, `child_category`, `product_availability`, `stock`, `product_image`, `created_at`, `updated_at`, `status`) VALUES
(1, 'Men blue shirt', 'MB001', '500', '700', 2, '50', 'Men blue formal shirt', 1, 1, 1, 1, '100', 'a1.jpeg', '2019-11-15 09:56:25', '2019-11-15 09:56:25', '1');

-- --------------------------------------------------------

--
-- Table structure for table `single_image`
--

CREATE TABLE `single_image` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `single_image`
--

INSERT INTO `single_image` (`id`, `title`, `image`, `created_at`) VALUES
(1, 'Php developer', '10.jpeg', '2019-11-12 09:20:39'),
(2, 'Java developer', 'a3.jpeg', '2019-11-12 09:21:33'),
(3, '.Net Developer', '8.jpeg', '2019-11-12 09:22:02'),
(4, 'Web Designer', '8.jpeg', '2019-11-12 09:22:59'),
(5, 'Css Developer', '8.jpeg', '2019-11-12 09:25:17'),
(8, 'sdfsdfsd', 'a3.jpeg', '2019-11-12 09:26:44'),
(9, 'ddfsdfsdf', 'a2.jpeg', '2019-11-12 09:27:16'),
(10, 'sdfsdfs', 'a1.jpeg', '2019-11-12 09:28:06'),
(11, 'dfgdfgdf', 'a2.jpeg', '2019-11-12 09:29:46'),
(16, 'fgddgfg', '9.jpeg', '2019-11-15 10:14:31');

-- --------------------------------------------------------

--
-- Table structure for table `sub_category`
--

CREATE TABLE `sub_category` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `sub_category_name` varchar(255) NOT NULL,
  `status` enum('1','0') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sub_category`
--

INSERT INTO `sub_category` (`id`, `category_id`, `sub_category_name`, `status`) VALUES
(1, 1, 'Shirt', '1'),
(2, 1, 'T-Shirt', '1'),
(3, 2, 'Jeans', '1'),
(4, 2, 'T-Shirts', '1'),
(5, 2, 'Top', '1');

-- --------------------------------------------------------

--
-- Table structure for table `sub_child_category`
--

CREATE TABLE `sub_child_category` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `sub_category_id` int(11) NOT NULL,
  `child_category_name` varchar(255) NOT NULL,
  `status` enum('1','0') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sub_child_category`
--

INSERT INTO `sub_child_category` (`id`, `category_id`, `sub_category_id`, `child_category_name`, `status`) VALUES
(1, 1, 1, 'Formal', '1'),
(2, 2, 3, 'Casual', '1'),
(3, 2, 4, 'Casual', '1');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(300) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `email` varchar(300) DEFAULT NULL,
  `mobile` varchar(100) NOT NULL,
  `country` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `status` enum('1','0') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `name`, `email`, `mobile`, `country`, `state`, `city`, `gender`, `status`) VALUES
(34, 'sunil', '123', 'George Nills', 'a@gmail.com', '8130110275', 'India', 'Uttra Pradesh', 'Ghazibad', 'Male', '1'),
(35, 'sunil111', '12121212', 'George Nills', 'a@gmail.com1', '8130110275', 'US', '', '', '', '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `add_more_field`
--
ALTER TABLE `add_more_field`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `multiple_image`
--
ALTER TABLE `multiple_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `single_image`
--
ALTER TABLE `single_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_category`
--
ALTER TABLE `sub_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_child_category`
--
ALTER TABLE `sub_child_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `add_more_field`
--
ALTER TABLE `add_more_field`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `multiple_image`
--
ALTER TABLE `multiple_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `single_image`
--
ALTER TABLE `single_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `sub_category`
--
ALTER TABLE `sub_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `sub_child_category`
--
ALTER TABLE `sub_child_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
