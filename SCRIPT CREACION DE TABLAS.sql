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
-- Table `DER-ISW3`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DER-ISW3`.`users` (
  `users_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `dni` INT NOT NULL,
  PRIMARY KEY (`users_id`),
  UNIQUE INDEX `dni_UNIQUE` (`dni` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DER-ISW3`.`cards`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DER-ISW3`.`cards` (
  `cards_id` INT NOT NULL AUTO_INCREMENT,
  `number` INT NOT NULL,
  `balance` FLOAT NOT NULL,
  `activated` TINYINT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`cards_id`),
  UNIQUE INDEX `number_UNIQUE` (`number` ASC) VISIBLE,
  INDEX `fk_card_user1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_card_user1`
    FOREIGN KEY (`users_id`)
    REFERENCES `DER-ISW3`.`users` (`users_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DER-ISW3`.`transactions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DER-ISW3`.`transactions` (
  `transactions_id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `time` TIME NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `description` VARCHAR(150) NOT NULL,
  `price` FLOAT NOT NULL,
  `cards_id` INT NOT NULL,
  PRIMARY KEY (`transactions_id`),
  INDEX `fk_transaction_card1_idx` (`cards_id` ASC) VISIBLE,
  CONSTRAINT `fk_transaction_card1`
    FOREIGN KEY (`cards_id`)
    REFERENCES `DER-ISW3`.`cards` (`cards_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DER-ISW3`.`payment_methods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DER-ISW3`.`payment_methods` (
  `payment_methods_id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  `activated` TINYINT NOT NULL,
  `data` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`payment_methods_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DER-ISW3`.`users_x_payment_methods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DER-ISW3`.`users_x_payment_methods` (
  `users_id` INT NOT NULL,
  `payment_methods_id` INT NOT NULL,
  `data` VARCHAR(45) NOT NULL,
  `activated` TINYINT NOT NULL,
  INDEX `fk_user x payment method_user_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_user x payment method_payment method1_idx` (`payment_methods_id` ASC) VISIBLE,
  PRIMARY KEY (`users_id`, `payment_methods_id`),
  CONSTRAINT `fk_user x payment method_user`
    FOREIGN KEY (`users_id`)
    REFERENCES `DER-ISW3`.`users` (`users_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user x payment method_payment method1`
    FOREIGN KEY (`payment_methods_id`)
    REFERENCES `DER-ISW3`.`payment_methods` (`payment_methods_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
