const faker = require("faker");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const homeinfo = (start, end) => {
  let info = [];
  for (let i = start; i <= end; i++) {
    let item = {
      id: i,
      owner_id: Math.floor(Math.random() * 100000),
      email: faker.internet.email(),
      address_line1: faker.address.streetAddress(),
      address_line2: faker.address.city().concat(', ', faker.address.state(), ' ', faker.address.zipCodeByState()),
      asking_price: Math.floor(Math.random() * 1000000) + 100000,
      num_beds: Math.floor(Math.random() * 10),
      num_baths: Math.floor(Math.random() * 10) + 0.5,
      sq_ft: Math.floor(Math.random() * 5000),
      Saved: Math.round(Math.random())
    };
    info.push(item);
  }
  return info;
};

const csvWriter = createCsvWriter({
  path: '/Users/douglasperez/Hack-reactor/SDC/Postgress-Refactor/PhotoGallery-rev1-copy/database/CSV/home_info.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'owner_id', title: 'owner_id' },
    { id: 'address_line1', title: 'address_line1' },
    { id: 'address_line2', title: 'address_line2' },
    { id: 'asking_price', title: 'asking_price' },
    { id: 'num_beds', title: 'num_beds' },
    { id: 'num_baths', title: 'num_baths' },
    { id: 'sq_ft', title: 'sq_ft' },
    { id: 'saved', title: 'saved' }
  ]
});

async function writeHomeInfo(number) {
  const currChunk = Math.floor(number / 100);
  console.log("Number of Chunks", currChunk);

  for (let i = 0; i < 100; i++) {
    console.log(`Processing home chunk : ${i + 1}`);
    const infoDump = homeinfo(currChunk * i, currChunk * (i + 1) - 1);
    await csvWriter.writeRecords(infoDump);
  }
}

writeHomeInfo(3000000);