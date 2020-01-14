-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主机： 10.18.181.105:3306
-- 生成日期： 2020-01-14 17:01:00
-- 服务器版本： 5.7.17-baidu-rds-3.0.0.1-log
-- PHP 版本： 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `b_o83uwx3ppod22t`
--

-- --------------------------------------------------------

--
-- 表的结构 `form_data_code`
--

CREATE TABLE `form_data_code` (
  `id` int(8) NOT NULL,
  `type` varchar(16) DEFAULT NULL,
  `model` varchar(16) DEFAULT NULL,
  `textarea` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `form_data_code`
--

INSERT INTO `form_data_code` (`id`, `type`, `model`, `textarea`) VALUES
(1, 'test', 'test', 'test');

--
-- 转储表的索引
--

--
-- 表的索引 `form_data_code`
--
ALTER TABLE `form_data_code`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `form_data_code`
--
ALTER TABLE `form_data_code`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
