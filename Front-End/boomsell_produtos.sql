CREATE DATABASE  IF NOT EXISTS `boomsell` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `boomsell`;
-- MySQL dump 10.13  Distrib 5.6.17, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: boomsell
-- ------------------------------------------------------
-- Server version	5.7.30-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produtos` (
  `idproduto` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(45) NOT NULL,
  `tipo` varchar(150) NOT NULL,
  `nomeimagem` varchar(200) DEFAULT NULL,
  `nomeimagem2` varchar(200) DEFAULT NULL,
  `descricao` varchar(150) NOT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `precofinal` decimal(8,2) DEFAULT NULL,
  PRIMARY KEY (`idproduto`),
  UNIQUE KEY `nomeimagem_UNIQUE` (`nomeimagem`),
  UNIQUE KEY `nomeimagem2_UNIQUE` (`nomeimagem2`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'play','Video Game','ps5.webp','_img/ps52.webp','Playstation 5',5550.00,4999.00),(2,'play','Fone de Ouvido','HeadsetPulse3d.webp','_img/HeadsetPulse3d2.webp','Headset Pulse 3D',699.00,499.99),(3,'play','Video Game','ps4.png','_img/ps42.jpg','Playstation 4',3000.00,2568.15),(4,'play','Controle','controleDualSense.jpg','_img/ps5.webp','Controle DualSense',600.00,499.99),(5,'nintendo','Video Game','nintendoSwitch32gb.webp','_img/nintendoSwitch32gb2.webp','Nintendo Switch 32GB',2896.33,2756.24),(6,'xbox','Video Game','xboxOne.webp','_img/xboxOne2.jpg','Xbox One',2839.00,2838.00),(7,'xbox','Video Game','xboxOneX4k.webp','_img/xboxOneX4k2.webp','Xbox One X 4K',3430.28,3330.00),(8,'manga','revista','blackclover14.jpg','_img/bk2.jpg','Black Clover 14',30.00,28.00),(9,'manga','revista','bleach72.jpg','_img/bleach2.jpg','Bleach 72',30.00,26.00),(10,'manga','revista','dgrayman26.jpg','_img/dgrayman2.jpg','D-Gray Man 26',33.21,29.18),(11,'manga','revista','tokyoghoul4.jpg','_img/tokyoghoul2.jpg','Tokyo Ghoul 4',52.00,36.00),(12,'manga','revista','theirregularatmagicscholl04.jpg','_img/theirregularatmagicscholl2.jpg','The I. At Magic School 4',18.00,15.00);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-05 21:06:30
