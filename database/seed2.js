const faker = require('faker');
const fs = require('fs');

INSERT INTO owners(id, owner_name, email, phone)
VALUES(1, 'test', 'test', 'test');


// // Number of home records
// const numHomes = 100;

// // Initialize data object for HomeInfo table
// const HomeData = [];
// for (let i = 0; i < numHomes; i += 1) {
//   const HomeInfo = {
//     address_line1: faker.address.streetAddress(),
//     address_line2: faker.address.city().concat(', ', faker.address.state(), ' ', faker.address.zipCodeByState()),
//     asking_price: Math.floor(Math.random() * 1000000) + 100000,
//     num_beds: Math.floor(Math.random() * 10),
//     num_baths: Math.floor(Math.random() * 10) + 0.5,
//     sq_ft: Math.floor(Math.random() * 5000),
//     saved: Math.round(Math.random()),
//   };
//   HomeData.push(HomeInfo);
// }

// for (let i = 0; i < HomeData.length; i += 1) {
//   const queryString = `INSERT INTO home_info (address_line1, address_line2, asking_price, num_beds, num_baths, sq_ft, saved) VALUES ('${HomeData[i].address_line1.replace(/'/g, '"')}', '${HomeData[i].address_line2.replace(/'/g, '"')}', ${HomeData[i].asking_price}, ${HomeData[i].num_beds}, ${HomeData[i].num_baths}, ${HomeData[i].sq_ft}, ${HomeData[i].saved})`;
//   console.log("connection", connection)
//   connection.query(queryString, (error) => {
//     if (error) throw error;
//   });
// }



// connection.end();