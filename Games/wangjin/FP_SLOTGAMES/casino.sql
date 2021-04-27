-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-04-26 11:59:17
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
-- 資料庫： `casino`
--

-- --------------------------------------------------------

--
-- 資料表結構 `results`
--

CREATE TABLE `results` (
  `ResultID` int(10) NOT NULL,
  `UserID` int(10) NOT NULL,
  `BetTime` varchar(20) NOT NULL,
  `Lay` text NOT NULL,
  `Stake` float NOT NULL,
  `AccountBalBE` float NOT NULL,
  `GameResult` text NOT NULL,
  `NetWin` float NOT NULL,
  `AccountBalAF` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `results`
--

INSERT INTO `results` (`ResultID`, `UserID`, `BetTime`, `Lay`, `Stake`, `AccountBalBE`, `GameResult`, `NetWin`, `AccountBalAF`) VALUES
(1, 1, '2021/4/23 上午9:17:16', 'All', 10, 5000, 'Line 14 :bar*3,Line 28 :bell*3', 380, 5380),
(2, 1, '2021/4/23 上午9:17:25', 'All', 10, 5380, 'Line 10 :777*3,Line 30 :bar*3', 500, 5880),
(3, 1, '2021/4/23 上午9:17:32', 'All', 10, 5880, 'Line 2 :grape*4,Line 9 :cookie*3', 300, 6180),
(4, 1, '2021/4/23 上午9:17:38', 'All', 10, 6180, 'Line 12 :bar*3', 200, 6380),
(5, 1, '2021/4/23 上午9:17:44', 'All', 10, 6380, 'Null', -10, 6370),
(6, 1, '2021/4/23 上午9:17:51', 'All', 10, 6370, 'Line 16 :bell*3', 170, 6540),
(7, 1, '2021/4/23 上午9:17:57', 'All', 10, 6540, 'Null', -10, 6530),
(8, 1, '2021/4/23 上午9:18:03', 'All', 10, 6530, 'Line 5 :grape*3,Line 47 :grape*4', 270, 6800),
(9, 1, '2021/4/23 上午9:18:10', 'All', 10, 6800, 'Line 13 :cookie*3', 140, 6940),
(10, 1, '2021/4/23 上午9:18:17', 'All', 10, 6940, 'Line 15 :bar*3', 200, 7140),
(11, 1, '2021/4/23 上午9:18:23', 'All', 10, 7140, 'Null', -10, 7130),
(12, 1, '2021/4/23 上午9:20:31', 'All', 10, 7120, 'Line 8 :777*4,Line 32 :bar*3', 600, 7720),
(13, 1, '2021/4/23 上午9:20:37', 'All', 10, 7720, 'Null', -10, 7710);

-- --------------------------------------------------------

--
-- 資料表結構 `users`
--

CREATE TABLE `users` (
  `UserID` int(10) NOT NULL,
  `UserName` varchar(30) NOT NULL,
  `UserAccount` varchar(30) NOT NULL,
  `UserPassword` varchar(32) NOT NULL,
  `UserWallet` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `users`
--

INSERT INTO `users` (`UserID`, `UserName`, `UserAccount`, `UserPassword`, `UserWallet`) VALUES
(1, 'Play0001', 'play0001', '943811A65C02A2B0563D2D997B83D016', 7710);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`ResultID`);

--
-- 資料表索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserID`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `results`
--
ALTER TABLE `results`
  MODIFY `ResultID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `users`
--
ALTER TABLE `users`
  MODIFY `UserID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
