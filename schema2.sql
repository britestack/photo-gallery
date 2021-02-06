DROP DATABASE IF EXISTS homesoptimized;

CREATE DATABASE homesoptimized;
\c homesoptimized;

CREATE TABLE IF NOT EXISTS owners (
  id          SERIAL PRIMARY KEY,
  owner_name  VARCHAR(150) NOT NULL,
  email       VARCHAR(150) NOT NULL,
  phone       VARCHAR(150) NOT NULL
);

CREATE TABLE IF NOT EXISTS home_info (
  id              SERIAL PRIMARY KEY,
  owner_id        INT NOT NULL REFERENCES owners(id) ON DELETE CASCADE,
  address_line1    VARCHAR(150) NOT NULL,
  address_line2    VARCHAR(150),
  asking_price     INT NOT NULL,
  num_beds         INT NOT NULL,
  num_baths        FLOAT NOT NULL,
  sq_ft            INT NOT NULL,
  saved           BOOLEAN
);

CREATE TABLE home_images (
  id          SERIAL PRIMARY KEY,
  home_id     INT NOT NULL REFERENCES home_info(id) ON DELETE CASCADE,
  image_url    VARCHAR(150)
);


\COPY owners FROM '/Users/douglasperez/Hack-reactor/SDC/Postgress-Refactor/PhotoGallery-rev1-copy/database/CSV/owners.csv' WITH CSV HEADER DELIMITER ',';

\COPY home_info FROM '/Users/douglasperez/Hack-reactor/SDC/Postgress-Refactor/PhotoGallery-rev1-copy/database/CSV/home_info.csv' WITH CSV HEADER DELIMITER ',';