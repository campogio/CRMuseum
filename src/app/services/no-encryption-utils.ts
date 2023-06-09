import { capSQLiteSet } from '@capacitor-community/sqlite';

export const createSchema: string = '' +
  '-- MySQL Workbench Forward Engineering\n' +
  '\n' +
  'SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;\n' +
  'SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;\n' +
  'SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE=\'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION\';\n' +
  '\n' +
  '-- -----------------------------------------------------\n' +
  '-- Schema mydb\n' +
  '-- -----------------------------------------------------\n' +
  '\n' +
  '-- -----------------------------------------------------\n' +
  '-- Schema mydb\n' +
  '-- -----------------------------------------------------\n' +
  'CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;\n' +
  'USE `mydb` ;\n' +
  '\n' +
  '-- -----------------------------------------------------\n' +
  '-- Table `mydb`.`stanza`\n' +
  '-- -----------------------------------------------------\n' +
  'CREATE TABLE IF NOT EXISTS `mydb`.`stanza` (\n' +
  '  `idstanza` INT NOT NULL,\n' +
  '  `nome` VARCHAR(45) NOT NULL,\n' +
  '  PRIMARY KEY (`idstanza`))\n' +
  'ENGINE = InnoDB;\n' +
  '\n' +
  '\n' +
  '-- -----------------------------------------------------\n' +
  '-- Table `mydb`.`media`\n' +
  '-- -----------------------------------------------------\n' +
  'CREATE TABLE IF NOT EXISTS `mydb`.`media` (\n' +
  '  `idmedia` INT NOT NULL,\n' +
  '  `tipo` VARCHAR(45) NOT NULL,\n' +
  '  `path` VARCHAR(200) NOT NULL,\n' +
  '  PRIMARY KEY (`idmedia`),\n' +
  '  UNIQUE INDEX `path_UNIQUE` (`path` ASC) VISIBLE)\n' +
  'ENGINE = InnoDB;\n' +
  '\n' +
  '\n' +
  '-- -----------------------------------------------------\n' +
  '-- Table `mydb`.`artista`\n' +
  '-- -----------------------------------------------------\n' +
  'CREATE TABLE IF NOT EXISTS `mydb`.`artista` (\n' +
  '  `idartista` INT NOT NULL,\n' +
  '  `nome` VARCHAR(45) NULL,\n' +
  '  `descrizione` TEXT(1000) NULL,\n' +
  '  `artistacol` VARCHAR(45) NULL,\n' +
  '  PRIMARY KEY (`idartista`))\n' +
  'ENGINE = InnoDB;\n' +
  '\n' +
  '\n' +
  '-- -----------------------------------------------------\n' +
  '-- Table `mydb`.`opera`\n' +
  '-- -----------------------------------------------------\n' +
  'CREATE TABLE IF NOT EXISTS `mydb`.`opera` (\n' +
  '  `idopera` INT NOT NULL,\n' +
  '  `artista_idartista` INT NOT NULL,\n' +
  '  `stanza_idstanza` INT NOT NULL,\n' +
  '  `nome` VARCHAR(45) NULL,\n' +
  '  `anno` VARCHAR(45) NULL,\n' +
  '  `descrizione` TEXT(1000) NULL,\n' +
  '  PRIMARY KEY (`idopera`),\n' +
  '  INDEX `fk_opera_artista_idx` (`artista_idartista` ASC) VISIBLE,\n' +
  '  INDEX `fk_opera_stanza1_idx` (`stanza_idstanza` ASC) VISIBLE,\n' +
  '  CONSTRAINT `fk_opera_artista`\n' +
  '    FOREIGN KEY (`artista_idartista`)\n' +
  '    REFERENCES `mydb`.`artista` (`idartista`)\n' +
  '    ON DELETE NO ACTION\n' +
  '    ON UPDATE NO ACTION,\n' +
  '  CONSTRAINT `fk_opera_stanza1`\n' +
  '    FOREIGN KEY (`stanza_idstanza`)\n' +
  '    REFERENCES `mydb`.`stanza` (`idstanza`)\n' +
  '    ON DELETE NO ACTION\n' +
  '    ON UPDATE NO ACTION)\n' +
  'ENGINE = InnoDB;\n' +
  '\n' +
  '\n' +
  '-- -----------------------------------------------------\n' +
  '-- Table `mydb`.`guestbookEntry`\n' +
  '-- -----------------------------------------------------\n' +
  'CREATE TABLE IF NOT EXISTS `mydb`.`guestbookEntry` (\n' +
  '  `idguestbookEntry` INT NOT NULL,\n' +
  '  `testo` TINYTEXT NULL,\n' +
  '  `foto` TEXT(1000) NULL,\n' +
  '  PRIMARY KEY (`idguestbookEntry`))\n' +
  'ENGINE = InnoDB;\n' +
  '\n' +
  '\n' +
  '-- -----------------------------------------------------\n' +
  '-- Table `mydb`.`opera_has_media`\n' +
  '-- -----------------------------------------------------\n' +
  'CREATE TABLE IF NOT EXISTS `mydb`.`opera_has_media` (\n' +
  '  `opera_idopera` INT NOT NULL,\n' +
  '  `media_idmedia` INT NOT NULL,\n' +
  '  PRIMARY KEY (`opera_idopera`, `media_idmedia`),\n' +
  '  INDEX `fk_opera_has_media_media1_idx` (`media_idmedia` ASC) VISIBLE,\n' +
  '  INDEX `fk_opera_has_media_opera1_idx` (`opera_idopera` ASC) VISIBLE,\n' +
  '  CONSTRAINT `fk_opera_has_media_opera1`\n' +
  '    FOREIGN KEY (`opera_idopera`)\n' +
  '    REFERENCES `mydb`.`opera` (`idopera`)\n' +
  '    ON DELETE NO ACTION\n' +
  '    ON UPDATE NO ACTION,\n' +
  '  CONSTRAINT `fk_opera_has_media_media1`\n' +
  '    FOREIGN KEY (`media_idmedia`)\n' +
  '    REFERENCES `mydb`.`media` (`idmedia`)\n' +
  '    ON DELETE NO ACTION\n' +
  '    ON UPDATE NO ACTION)\n' +
  'ENGINE = InnoDB;\n' +
  '\n' +
  '\n' +
  '-- -----------------------------------------------------\n' +
  '-- Table `mydb`.`artista_has_media`\n' +
  '-- -----------------------------------------------------\n' +
  'CREATE TABLE IF NOT EXISTS `mydb`.`artista_has_media` (\n' +
  '  `artista_idartista` INT NOT NULL,\n' +
  '  `media_idmedia` INT NOT NULL,\n' +
  '  PRIMARY KEY (`artista_idartista`, `media_idmedia`),\n' +
  '  INDEX `fk_artista_has_media_media1_idx` (`media_idmedia` ASC) VISIBLE,\n' +
  '  INDEX `fk_artista_has_media_artista1_idx` (`artista_idartista` ASC) VISIBLE,\n' +
  '  CONSTRAINT `fk_artista_has_media_artista1`\n' +
  '    FOREIGN KEY (`artista_idartista`)\n' +
  '    REFERENCES `mydb`.`artista` (`idartista`)\n' +
  '    ON DELETE NO ACTION\n' +
  '    ON UPDATE NO ACTION,\n' +
  '  CONSTRAINT `fk_artista_has_media_media1`\n' +
  '    FOREIGN KEY (`media_idmedia`)\n' +
  '    REFERENCES `mydb`.`media` (`idmedia`)\n' +
  '    ON DELETE NO ACTION\n' +
  '    ON UPDATE NO ACTION)\n' +
  'ENGINE = InnoDB;\n' +
  '\n' +
  '\n' +
  'SET SQL_MODE=@OLD_SQL_MODE;\n' +
  'SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;\n' +
  'SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;\n';
