CREATE TABLE IF NOT EXISTS `users` (`id` INTEGER NOT NULL auto_increment , `first_name` VARCHAR(255) NOT NULL, `last_name` VARCHAR(255) NOT NULL, `username` VARCHAR(255) NOT NULL UNIQUE, `email` VARCHAR(255) NOT NULL UNIQUE, `password` VARCHAR(255) NOT NULL, `createdAt` DATETIME DEFAULT now(), `is_admin` TINYINT(1) NOT NULL, `updatedAt` DATETIME DEFAULT now(), PRIMARY KEY (`id`)) ENGINE=InnoDB;
