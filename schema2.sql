DROP DATABASE IF EXISTS HomesOptimized;

CREATE DATABASE HomesOptimized;
USE HomesOptimized;

CREATE TABLE HomeInfo(
  id              INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Owner_id        INT NOT NULL,
  AddressLine1    VARCHAR(150) NOT NULL,
  AddressLine2    VARCHAR(150),
  AskingPrice     INT NOT NULL,
  NumBeds         INT NOT NULL,
  NumBaths        FLOAT NOT NULL,
  SqFt            INT NOT NULL,
  Saved           BOOLEAN
  FOREIGN KEY (Owner_id) REFERENCES OwnerInfo(id)
);

CREATE TABLE HomeImages(
  id          INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Home_ID     INT NOT NULL,
  ImageURL    VARCHAR(150),
  FOREIGN KEY (Home_ID) REFERENCES HomeInfo(id)
);

CREATE TABLE OwnerInfo(
  id          INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Owner_name  VARCHAR(150) NOT NULL,
  Email       VARCHAR(150) NOT NULL,
  Phone       VARCHAR(150) NOT NULL,
);

INSERT INTO HomeInfo(Owner_id, AddressLine1, AddressLine2, AskingPrice, NumBeds, NumBaths, SqFt, Saved )
VALUES (1, 'value2', 'value2', 2, 2, 2, 2, True);

RETURNING id;