DROP DATABASE IF EXISTS homesoptimized;

CREATE DATABASE homesoptimized;
\c homesoptimized;

CREATE TABLE owners (
  id          SERIAL PRIMARY KEY,
  owner_name  VARCHAR(150) NOT NULL,
  email       VARCHAR(150) NOT NULL,
  phone       VARCHAR(150) NOT NULL
);

CREATE TABLE home_info (
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

INSERT INTO owners(id, owner_name, email, phone)
VALUES (1, 'test', 'test', 'test');

\COPY owners FROM '/Users/helloFriend/Desktop/C0DE/photoGallery/database/CSV/owners.csv' WITH CSV HEADER DELIMITER ',';