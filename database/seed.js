const faker = require('faker');
const mysql = require('mysql');

// Number of home records
const numHomes = 100;

// Initialize data object for HomeInfo table
const HomeData = [];
for (let i = 0; i < numHomes; i += 1) {
  const HomeInfo = {
    AddressLine1: faker.address.streetAddress(),
    AddressLine2: faker.address.city().concat(', ', faker.address.state(), ' ', faker.address.zipCodeByState()),
    AskingPrice: Math.floor(Math.random() * 1000000) + 100000,
    NumBeds: Math.floor(Math.random() * 10),
    NumBaths: Math.floor(Math.random() * 10) + 0.5,
    SqFt: Math.floor(Math.random() * 5000),
    Saved: Math.round(Math.random()),
  };
  HomeData.push(HomeInfo);
}

// Initialize data object for HomeImages table
const HomeImages = [];
for (let i = 0; i < numHomes; i += 1) {
  const HomeImage = { Home_ID: i + 1, ImageURL: [] };
  for (let j = 0; j < 50; j += 1) {
    HomeImage.ImageURL[j] = `https://truliaphotos.s3.us-east-2.amazonaws.com/${j + 1}.webp`;
  }
  HomeImages.push(HomeImage);
}

// Create database connection
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Plugblue2',
//   database: 'Homes',
// });
// connection.connect();

// Insert records into HomeInfo
for (let i = 0; i < HomeData.length; i += 1) {
  const queryString = `INSERT INTO HomeInfo (AddressLine1, AddressLine2, AskingPrice, NumBeds, NumBaths, SqFt, Saved) VALUES ('${HomeData[i].AddressLine1.replace(/'/g, '"')}', '${HomeData[i].AddressLine2.replace(/'/g, '"')}', ${HomeData[i].AskingPrice}, ${HomeData[i].NumBeds}, ${HomeData[i].NumBaths}, ${HomeData[i].SqFt}, ${HomeData[i].Saved})`;

  connection.query(queryString, (error) => {
    if (error) throw error;
  });
}

// Insert records into HomeImages
for (let i = 0; i < HomeImages.length; i += 1) {
  for (let j = 0; j < HomeImages[i].ImageURL.length; j += 1) {
    const queryString = `INSERT INTO HomeImages (Home_ID, ImageURL) VALUES (${HomeImages[i].Home_ID}, '${HomeImages[i].ImageURL[j]}')`;

    connection.query(queryString, (error) => {
      if (error) throw error;
    });
  }
}

// Close connection
connection.end();
