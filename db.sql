-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: localhost    Database: rfid_demo
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dc_inventory`
--

DROP TABLE IF EXISTS `dc_inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dc_inventory` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `style` varchar(30) NOT NULL,
  `stock` int NOT NULL,
  `name` varchar(150) NOT NULL,
  `colour` varchar(100) NOT NULL,
  `sz` varchar(10) NOT NULL,
  `price` float(10,2) NOT NULL,
  PRIMARY KEY (`style`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `style` (`style`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dc_inventory`
--

LOCK TABLES `dc_inventory` WRITE;
/*!40000 ALTER TABLE `dc_inventory` DISABLE KEYS */;
INSERT INTO `dc_inventory` VALUES (5,'Ad4',0,'db2','A','M',0.00),(4,'Epson PictureMate PM-520',0,'Epson','Printer','M',0.00);
/*!40000 ALTER TABLE `dc_inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dc_tags`
--

DROP TABLE IF EXISTS `dc_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dc_tags` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `tid` varchar(30) NOT NULL,
  `style` varchar(30) NOT NULL,
  `name` varchar(150) NOT NULL,
  `colour` varchar(100) NOT NULL,
  `sz` varchar(10) NOT NULL,
  `price` float(10,2) NOT NULL,
  PRIMARY KEY (`tid`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `tid` (`tid`),
  KEY `style` (`style`),
  CONSTRAINT `dc_tags_ibfk_1` FOREIGN KEY (`style`) REFERENCES `dc_inventory` (`style`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dc_tags`
--

LOCK TABLES `dc_tags` WRITE;
/*!40000 ALTER TABLE `dc_tags` DISABLE KEYS */;
INSERT INTO `dc_tags` VALUES (1,'E28011602000613B2A0A0A92','Epson PictureMate PM-520','Epson','Printer','M',0.00),(2,'E2801160200061E729C70A92','Epson PictureMate PM-520','Epson','Printer','M',0.00);
/*!40000 ALTER TABLE `dc_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ongoing_to_shop`
--

DROP TABLE IF EXISTS `ongoing_to_shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ongoing_to_shop` (
  `shop` varchar(150) NOT NULL,
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `tid` varchar(30) NOT NULL,
  `style` varchar(30) NOT NULL,
  `name` varchar(150) NOT NULL,
  `colour` varchar(100) NOT NULL,
  `sz` varchar(10) NOT NULL,
  `price` float(10,2) NOT NULL,
  PRIMARY KEY (`tid`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `tid` (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ongoing_to_shop`
--

LOCK TABLES `ongoing_to_shop` WRITE;
/*!40000 ALTER TABLE `ongoing_to_shop` DISABLE KEYS */;
INSERT INTO `ongoing_to_shop` VALUES ('server room',12,'E28011602000613B2A0A0A92','Epson PictureMate PM-520','Epson','Printer','M',0.00),('server room',13,'E2801160200061E729C70A92','Epson PictureMate PM-520','Epson','Printer','M',0.00);
/*!40000 ALTER TABLE `ongoing_to_shop` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-30 16:03:23
