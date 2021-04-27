-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-04-22 13:30:32
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
-- 資料庫： `fishshooter`
--
CREATE DATABASE IF NOT EXISTS `fishshooter` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `fishshooter`;

-- --------------------------------------------------------

--
-- 資料表結構 `betrecord`
--

CREATE TABLE `betrecord` (
  `memberId` varchar(100) NOT NULL,
  `memberName` varchar(100) NOT NULL,
  `betBeginTime` varchar(100) NOT NULL,
  `betType` varchar(100) NOT NULL,
  `betMoney` int(11) NOT NULL,
  `memberWalletBefore` int(11) NOT NULL,
  `gameIncome` int(11) NOT NULL,
  `betResult` int(11) NOT NULL,
  `memberWallet` int(11) NOT NULL,
  `fishHited` varchar(100) NOT NULL,
  `fishKilled` varchar(100) NOT NULL,
  `betOverTime` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `betrecord`
--

INSERT INTO `betrecord` (`memberId`, `memberName`, `betBeginTime`, `betType`, `betMoney`, `memberWalletBefore`, `gameIncome`, `betResult`, `memberWallet`, `fishHited`, `fishKilled`, `betOverTime`) VALUES
('1', 'theFisher', '2021/04/21 13:12:34', '捕魚機 標準砲彈', 3, 1000, 0, -3, 997, 'fish01', '無', '2021/04/21 13:16:46'),
('2', '測試帳號', '2021/04/21 14:42:33', '捕魚機 標準砲彈', 3, 996, 2, -1, 995, 'fish01,fish01,fish02', 'fish01,fish01', '2021/04/21 14:45:23'),
('2', '測試帳號', '2021/04/21 14:42:33', '捕魚機 標準砲彈', 3, 996, 2, -1, 995, 'fish01,fish01,fish02', 'fish01,fish01', '2021/04/21 14:45:23'),
('2', '測試帳號', '2021/04/21 14:42:33', '捕魚機 標準砲彈', 3, 996, 2, -1, 995, 'fish01,fish01,fish02', 'fish01,fish01', '2021/04/21 14:45:23'),
('2', '測試帳號', '2021/04/21 14:42:33', '捕魚機 標準砲彈', 3, 996, 2, -1, 995, 'fish01,fish01,fish02', 'fish01,fish01', '2021/04/21 14:45:23'),
('2', '測試帳號', '2021/04/21 14:42:33', '捕魚機 標準砲彈', 3, 996, 2, -1, 995, 'fish01,fish01,fish02', 'fish01,fish01', '2021/04/21 14:45:23'),
('2', '測試帳號', '2021/04/21 14:42:33', '捕魚機 標準砲彈', 3, 996, 2, -1, 995, 'fish01,fish01,fish02', 'fish01,fish01', '2021/04/21 14:45:23'),
('2', '測試帳號', '2021/04/21 14:42:33', '捕魚機 標準砲彈', 3, 996, 2, -1, 995, 'fish01,fish01,fish02', 'fish01,fish01', '2021/04/21 14:45:23'),
('2', '測試帳號', '2021/04/21 14:42:33', '捕魚機 標準砲彈', 3, 996, 2, -1, 995, 'fish01,fish01,fish02', 'fish01,fish01', '2021/04/21 14:45:23'),
('2', '測試帳號', '2021/04/21 14:42:33', '捕魚機 標準砲彈', 3, 996, 2, -1, 995, 'fish01,fish01,fish02', 'fish01,fish01', '2021/04/21 14:45:23');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
