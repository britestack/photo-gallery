const faker = require("faker");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const homeImages = (start, end) => {
  let photos = [];
  for (let i = start; i <= end; i++) {
    let item = {
      id: i,
      home_id: Math.floor(Math.random() * 100000),
      image_url: "https://loremflickr.com/320/240/dog",
    };
    photos.push(item);
  }
  return photos;
};

const csvWriter = createCsvWriter({
  path: '/Users/douglasperez/Hack-reactor/SDC/Postgress-Refactor/PhotoGallery-rev1-copy/database/CSV/home_images.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'home_id', title: 'home_id' },
    { id: 'image_url', title: 'image_url' },
  ]
});

async function writeHomeImages(number) {
  const currChunk = Math.floor(number / 100);
  console.log("Number of Chunks", currChunk);

  for (let i = 0; i < 100; i++) {
    console.log(`Processing home chunk : ${i + 1}`);
    const photoDump = homeImages(currChunk * i, currChunk * (i + 1) - 1);
    await csvWriter.writeRecords(photoDump);
  }
}

writeHomeImages(6000000);