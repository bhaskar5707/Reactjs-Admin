-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 21, 2019 at 03:04 PM
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
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` enum('1','0') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`id`, `name`, `status`, `created_at`) VALUES
(1, 'Hermes', '1', '2019-11-21 07:44:55'),
(2, 'Prada', '1', '2019-11-21 07:45:11'),
(3, 'Gucci', '1', '2019-11-21 07:45:34'),
(4, 'Petter England', '1', '2019-11-21 07:45:44'),
(5, 'Levies', '1', '2019-12-16 11:36:44'),
(38, 'fsdfsdfsd', '1', '2019-12-17 12:27:42');

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
(1, 'Men\'s Fashion', '1'),
(2, 'Women Fashion', '1'),
(3, 'Toy\'s, Kid\'s Fashion & More', '1'),
(4, 'Beauty , Health & Daily Needs', '1'),
(5, 'Sports , Fitness & Outdoor', '1');

-- --------------------------------------------------------

--
-- Table structure for table `multiple_image`
--

CREATE TABLE `multiple_image` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(1, 'Ample Red Half Sleeve T-Shirt', 'AP001', '400', '550', 2, '10', 'Ample Grey Half Sleeve T-Shirt', 1, 3, 5, 2, '100', 'a3.jpeg', '2019-11-21 09:03:33', '2019-12-18 12:49:09', '1'),
(2, 'Ample Blue Half Sleeve T-Shirt', 'AP002', '400', '550', 1, '10', 'Ample Blue Half Sleeve T-Shirt', 1, 2, 5, 1, '100', 'c1.jpeg', '2019-11-21 09:03:33', '2019-12-18 09:34:38', '1'),
(3, 'Ample Green Half Sleeve T-Shirt', 'AP003', '400', '550', 1, '10', 'Ample Grey Half Sleeve T-Shirt', 1, 3, 5, 1, '100', 'c1.jpeg', '2019-11-21 09:03:33', '2019-11-21 09:03:33', '1'),
(4, 'Ample Yellow Half Sleeve T-Shirt', 'AP004', '400', '550', 1, '10', 'Ample Blue Half Sleeve T-Shirt', 1, 3, 5, 1, '100', 'c1.jpeg', '2019-11-21 09:03:33', '2019-11-21 09:03:33', '1'),
(5, 'Ample Pink Half Sleeve T-Shirt', 'AP005', '400', '550', 1, '10', 'Ample Grey Half Sleeve T-Shirt', 1, 3, 5, 1, '100', 'c1.jpeg', '2019-11-21 09:03:33', '2019-11-21 09:03:33', '1'),
(6, 'Ample Sky Blue Half Sleeve T-Shirt', 'AP006', '400', '550', 1, '10', 'Ample Blue Half Sleeve T-Shirt', 1, 3, 5, 1, '100', 'c1.jpeg', '2019-11-21 09:03:33', '2019-11-21 09:03:33', '1'),
(7, 'Ample Gray Half Sleeve T-Shirt', 'AP007', '400', '550', 1, '10', 'Ample Grey Half Sleeve T-Shirt', 1, 3, 5, 1, '100', 'c1.jpeg', '2019-11-21 09:03:33', '2019-11-21 09:03:33', '1'),
(8, 'Ample Light Blue Half Sleeve T-Shirt', 'AP008', '400', '550', 1, '10', 'Ample Blue Half Sleeve T-Shirt', 1, 3, 5, 1, '100', 'c1.jpeg', '2019-11-21 09:03:33', '2019-11-21 09:03:33', '1'),
(9, 'Ample Red Half Sleeve T-Shirt', 'AP001', '400', '550', 2, '10', 'Ample Grey Half Sleeve T-Shirt', 1, 3, 5, 2, '100', 'a1.jpeg', '2019-12-18 10:24:43', '2019-12-18 10:24:43', '1'),
(10, 'Ample Red Half Sleeve T-Shirt', 'AP001', '400', '550', 2, '10', 'Ample Grey Half Sleeve T-Shirt', 1, 3, 5, 2, '100', 'a1.jpeg', '2019-12-18 10:24:46', '2019-12-18 10:24:46', '1');

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
(1, 1, 'T-Shirt', '1'),
(2, 1, 'Bags & Luggage', '1'),
(3, 1, 'Clothing', '1'),
(4, 1, 'Sportswear', '1'),
(5, 1, 'Men\'s Grooming', '1'),
(6, 1, 'Eyewear', '1'),
(7, 2, 'Ethnic Wear', '1'),
(8, 2, 'Footwear', '1'),
(9, 2, 'Western Wear', '1'),
(10, 2, 'Watches', '1');

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
(1, 1, 1, 'Sports Shoes', '1'),
(2, 1, 1, 'Casual Shoes', '1'),
(3, 1, 1, 'Slippers & Flip Floops', '1'),
(4, 1, 2, 'Laptop Bags', '1'),
(5, 1, 3, 'T-Shirts', '1'),
(6, 1, 3, 'Shirt', '1'),
(7, 1, 3, 'Jeans', '1'),
(8, 2, 8, 'Sports Shoes', '1'),
(9, 2, 8, 'Casual Shoes', '1'),
(10, 2, 8, 'Heels', '1');

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
-- Indexes for table `brand`
--
ALTER TABLE `brand`
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
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `multiple_image`
--
ALTER TABLE `multiple_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `single_image`
--
ALTER TABLE `single_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `sub_category`
--
ALTER TABLE `sub_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `sub_child_category`
--
ALTER TABLE `sub_child_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
