const faker = require("faker");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const owner = (start, end) => {
  let owners = [];
  for (let i = start; i <= end; ++i) {
    let item = {
      id: i,
      owner_name = faker.internet.userName(),
      email = faker.internet.email(),
      phone = faker.phone.phoneNumber()
    };
    owners.push(item);
  }
  return owners;
};

const csvWriter = createCsvWriter({
  path: '/Users/douglasperez/Hack-reactor/SDC/Postgress-Refactor/PhotoGallery-rev1-copy/database/owners.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'owner_name', title: 'owner_name' },
    { id: 'email', title: 'email' },
    { id: 'phone', title: 'phone' }
  ]
});

async function writeOwners(number) {
  const currChunk = Math.floor(number / 10);
  console.log("Number of Chunks", currChunk);

  for (let i = 0; i < 10; ++i) {
    console.log(`Processing home chunk : ${i + 1}`);
    const ownerDump = home(currChunk * i, currChunk * (i + 1) - 1);
    await csvWriter.writeRecords(ownerDump);
  }
}

writeOwners(100);