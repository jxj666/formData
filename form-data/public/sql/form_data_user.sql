-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主机： 10.18.181.105:3306
-- 生成日期： 2020-01-14 17:01:11
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
-- 表的结构 `form_data_user`
--

CREATE TABLE `form_data_user` (
  `id` int(16) NOT NULL,
  `user` varchar(16) NOT NULL,
  `password` varchar(16) NOT NULL,
  `content` varchar(16) NOT NULL,
  `time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `form_data_user`
--

INSERT INTO `form_data_user` (`id`, `user`, `password`, `content`, `time`) VALUES
(1, 'jxj1992', '888888', 'test', '0000-00-00'),
(2, 'jxj2991', '666666', 'test', '0000-00-00');

--
-- 转储表的索引
--

--
-- 表的索引 `form_data_user`
--
ALTER TABLE `form_data_user`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `form_data_user`
--
ALTER TABLE `form_data_user`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
