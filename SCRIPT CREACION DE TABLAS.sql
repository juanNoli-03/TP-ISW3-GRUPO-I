-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DER-ISW3
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema DER-ISW3
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DER-ISW3` DEFAULT CHARACTER SET utf8 ;
USE `DER-ISW3` ;

-- -----------------------------------------------------
-- Table `DER-ISW3`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DER-ISW3`.`user` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `dni` INT NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE INDEX `dni_UNIQUE` (`dni` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DER-ISW3`.`card`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DER-ISW3`.`card` (
  `id_card` INT NOT NULL AUTO_INCREMENT,
  `number` INT NOT NULL,
  `balance` FLOAT NOT NULL,
  `activated` TINYINT NOT NULL,
  `user_id_user` INT NOT NULL,
  PRIMARY KEY (`id_card`),
  UNIQUE INDEX `number_UNIQUE` (`number` ASC) VISIBLE,
  INDEX `fk_card_user1_idx` (`user_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_card_user1`
    FOREIGN KEY (`user_id_user`)
    REFERENCES `DER-ISW3`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DER-ISW3`.`transaction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DER-ISW3`.`transaction` (
  `id_transaction` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `time` TIME NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `description` VARCHAR(150) NOT NULL,
  `price` FLOAT NOT NULL,
  `card_id_card` INT NOT NULL,
  PRIMARY KEY (`id_transaction`),
  INDEX `fk_transaction_card1_idx` (`card_id_card` ASC) VISIBLE,
  CONSTRAINT `fk_transaction_card1`
    FOREIGN KEY (`card_id_card`)
    REFERENCES `DER-ISW3`.`card` (`id_card`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DER-ISW3`.`payment method`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DER-ISW3`.`payment method` (
  `id_payment_method` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  `activated` TINYINT NOT NULL,
  `data` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_payment_method`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DER-ISW3`.`user x payment method`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DER-ISW3`.`user x payment method` (
  `user_id_user` INT NOT NULL,
  `payment method_id_payment_method` INT NOT NULL,
  INDEX `fk_user x payment method_user_idx` (`user_id_user` ASC) VISIBLE,
  INDEX `fk_user x payment method_payment method1_idx` (`payment method_id_payment_method` ASC) VISIBLE,
  CONSTRAINT `fk_user x payment method_user`
    FOREIGN KEY (`user_id_user`)
    REFERENCES `DER-ISW3`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user x payment method_payment method1`
    FOREIGN KEY (`payment method_id_payment_method`)
    REFERENCES `DER-ISW3`.`payment method` (`id_payment_method`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
