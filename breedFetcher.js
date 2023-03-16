const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    const breed = data[0];

    if (breed) {
      console.log(breed.description);
      callback(null, breed.description);
    } else {
      callback('Breed Not Found', null);
    }
  });
};

fetchBreedDescription('Siberian', (error, description) => {
    if (error) {
      console.log(error);
    } else {
      console.log(description);
    }
});
    fetchBreedDescription('InvalidBreed', (error, description) => {
        if (error) {
          console.log(error);
        } else {
          console.log(description);
        }  
  });


