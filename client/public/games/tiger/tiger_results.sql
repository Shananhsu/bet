-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-04-29 21:30:27
-- 伺服器版本： 10.4.17-MariaDB
-- PHP 版本： 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `games`
--

-- --------------------------------------------------------

--
-- 資料表結構 `tiger_results`
--

CREATE TABLE `tiger_results` (
  `id` int(10) NOT NULL,
  `betTime` datetime NOT NULL,
  `account` varchar(999) NOT NULL,
  `gameType` varchar(999) NOT NULL,
  `object` varchar(999) NOT NULL,
  `bets` decimal(13,4) NOT NULL,
  `moneyBefore` decimal(13,4) NOT NULL,
  `status` varchar(999) NOT NULL,
  `result` decimal(13,4) NOT NULL,
  `moneyAfter` decimal(13,4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `tiger_results`
--

INSERT INTO `tiger_results` (`id`, `betTime`, `account`, `gameType`, `object`, `bets`, `moneyBefore`, `status`, `result`, `moneyAfter`) VALUES
(1, '2021-04-29 21:10:22', 'steven', '拉霸', 'All', '10.0000', '7990.0000', 'Line 10 :bell*3', '170.0000', '8160.0000'),
(2, '2021-04-29 21:17:55', 'steven', '拉霸', 'All', '10.0000', '8150.0000', 'Null', '-10.0000', '8140.0000'),
(3, '2021-04-29 21:18:08', 'steven', '拉霸', 'All', '10.0000', '8140.0000', 'Line 30 :bell*4', '230.0000', '8370.0000'),
(4, '2021-04-29 21:26:27', 'steven', '拉霸', 'All', '10.0000', '8370.0000', 'Line 4 :bell*3,Line 23 :bar*3', '380.0000', '8750.0000'),
(5, '2021-04-29 21:26:33', 'steven', '拉霸', 'All', '10.0000', '8750.0000', 'Line 17 :bar*3', '200.0000', '8950.0000'),
(6, '2021-04-29 21:26:39', 'steven', '拉霸', 'All', '10.0000', '8950.0000', 'Null', '-10.0000', '8940.0000'),
(7, '2021-04-29 21:26:45', 'steven', '拉霸', 'All', '10.0000', '8940.0000', 'Null', '-10.0000', '8930.0000'),
(8, '2021-04-29 21:26:51', 'steven', '拉霸', 'All', '10.0000', '8930.0000', 'Line 22 :777*3', '290.0000', '9220.0000'),
(9, '2021-04-29 21:26:57', 'steven', '拉霸', 'All', '10.0000', '9220.0000', 'Null', '-10.0000', '9210.0000'),
(10, '2021-04-29 21:27:03', 'steven', '拉霸', 'All', '10.0000', '9210.0000', 'Line 5 :777*3,Line 47 :777*5', '790.0000', '10000.0000');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `tiger_results`
--
ALTER TABLE `tiger_results`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `tiger_results`
--
ALTER TABLE `tiger_results`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
